/// <reference lib="webworker" />

addEventListener('message', async (event: MessageEvent) => {
  const password = event.data?.password || '';
  const payload = event.data?.payload || '';

  const buffer_to_base64 = (buff: any) =>
    btoa(
      new Uint8Array(buff).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        '',
      ),
    );

  const base64_to_buffer = (b64: any) =>
    Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

  const getPasskey = async (secret: any) =>
    globalThis.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      'PBKDF2',
      false,
      ['deriveKey'],
    );

  const deriveKey = (passwordKey: any, salt: any, keyUsage: any) =>
    globalThis.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 600000,
        hash: 'SHA-512',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      keyUsage,
    );

  const encryptText = async (payload: string, password: string) => {
    const salt = globalThis.crypto.getRandomValues(new Uint8Array(16));
    const iv = globalThis.crypto.getRandomValues(new Uint8Array(12));

    const passKey = await getPasskey(password);
    const aesKey = await deriveKey(passKey, salt, ['encrypt']);

    return await globalThis.crypto.subtle
      .encrypt(
        { name: 'AES-GCM', iv },
        aesKey,
        await new Blob([payload]).arrayBuffer(),
      )
      .then((cipherText) => {
        const encryptedContentArr = new Uint8Array(cipherText);

        const buffer = new Uint8Array(
          salt.byteLength + iv.byteLength + encryptedContentArr.byteLength,
        );

        buffer.set(salt, 0);
        buffer.set(iv, salt.byteLength);
        buffer.set(encryptedContentArr, salt.byteLength + iv.byteLength);

        return buffer_to_base64(buffer);
      });
  };

  const encryptFileToBuf = async (file: File, password: string) => {
    const salt = globalThis.crypto.getRandomValues(new Uint8Array(16));
    const iv = globalThis.crypto.getRandomValues(new Uint8Array(12));

    const passKey = await getPasskey(password);
    const aesKey = await deriveKey(passKey, salt, ['encrypt']);

    return await globalThis.crypto.subtle
      .encrypt({ name: 'AES-GCM', iv }, aesKey, await file.arrayBuffer())
      .then((cipherText) => {
        const encryptedContentArr = new Uint8Array(cipherText);

        const buffer = new Uint8Array(
          salt.byteLength + iv.byteLength + encryptedContentArr.byteLength,
        );

        buffer.set(salt, 0);
        buffer.set(iv, salt.byteLength);
        buffer.set(encryptedContentArr, salt.byteLength + iv.byteLength);

        return { filename: file.name, buffer };
      });
  };

  const decryptFile = async (file: File, password: string) => {
    const arrayBuffer = await file.arrayBuffer();

    const salt = arrayBuffer.slice(0, 16);
    const iv = arrayBuffer.slice(16, 16 + 12);
    const data = arrayBuffer.slice(16 + 12);

    const passKey = await getPasskey(password);
    const aesKey = await deriveKey(passKey, salt, ['decrypt']);

    const result = await globalThis.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv,
      },
      aesKey,
      data,
    );

    return {
      filename: file.name,
      buffer: result,
    };
  };

  const decryptText = async (encryptedBase64: string, password: string) => {
    const file = base64_to_buffer(encryptedBase64);
    const salt = file.slice(0, 16);
    const iv = file.slice(16, 16 + 12);
    const data = file.slice(16 + 12);

    const passKey = await getPasskey(password);
    const aesKey = await deriveKey(passKey, salt, ['decrypt']);

    const val = await globalThis.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv,
      },
      aesKey,
      data,
    );

    return val;
  };

  let result = null;

  try {
    switch (event.data?.intent) {
      case 'encrypt-text':
        result = await encryptText(payload, password);
        break;
      case 'decrypt-text':
        result = await decryptText(payload, password);
        break;
      case 'encrypt-file':
        result = await encryptFileToBuf(payload, password);
        break;
      case 'decrypt-file':
        result = await decryptFile(payload, password);
        break;
      default:
        break;
    }
  } catch (e) {
    postMessage({ result: null, intent: event.data?.intent, error: e });
  }

  postMessage({ result, intent: event.data?.intent, error: null });
});
