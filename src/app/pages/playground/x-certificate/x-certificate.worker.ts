/// <reference lib="webworker" />

import { asn1, md, pki, pkcs12, util, random } from 'node-forge';

addEventListener('message', async (event: MessageEvent) => {
  const password = event.data?.password;
  const payload = event.data?.payload;
  const intent = event.data?.intent;

  const createCertificate = (
    { attrs, bits }: { attrs: any; bits: number },
    password: string,
  ) => {
    // generate a key pair
    const { privateKey, publicKey } = pki.rsa.generateKeyPair(bits);

    // create a simple certificate
    const cert = pki.createCertificate();

    // set the public key
    cert.publicKey = publicKey;

    // set the serial number
    cert.serialNumber = '01' + util.bytesToHex(random.getBytesSync(19));

    // set certificate validity
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(
      cert.validity.notBefore.getFullYear() + 1,
    );

    // use attrs for both subject and issuer
    cert.setSubject(attrs);
    cert.setIssuer(attrs);

    // set extensions
    cert.setExtensions([
      {
        name: 'basicConstraints',
        cA: true,
      },
      {
        name: 'keyUsage',
        keyCertSign: true,
        digitalSignature: true,
        nonRepudiation: true,
        keyEncipherment: true,
        dataEncipherment: true,
      },
      {
        name: 'extKeyUsage',
        serverAuth: true,
        clientAuth: true,
        codeSigning: true,
        emailProtection: true,
        timeStamping: true,
      },
      {
        name: 'nsCertType',
        client: true,
        server: true,
        email: true,
        objsign: true,
        sslCA: true,
        emailCA: true,
        objCA: true,
      },
    ]);

    // set up certificate details
    cert.sign(privateKey, md.sha256.create());

    // create PKCS#12 PFX
    const pkcs12Asn1 = pkcs12.toPkcs12Asn1(privateKey, [cert], password, {
      algorithm: 'aes256',
      generateLocalKeyId: true,
      friendlyName: 'test',
    });

    const pkcs12Der = asn1.toDer(pkcs12Asn1).getBytes();

    // create a Blob from the PKCS#12 DER data
    const blob = new Blob(
      [new Uint8Array(pkcs12Der.split('').map((char) => char.charCodeAt(0)))],
      { type: 'application/x-pkcs12' },
    );

    // use a static filename
    const filename = 'certificate.pfx';

    return {
      filename,
      blob,
    };
  };

  let result = null;

  switch (intent) {
    case 'create-certificate':
      result = await createCertificate(payload, password);
      break;
    default:
      break;
  }

  postMessage({ intent, result });
});
