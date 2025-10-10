import { Pipe, isDevMode } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Peer } from 'peerjs';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

// polyfill for Uint8Array.prototype.toBase64
if (!(Uint8Array as any).prototype.toBase64) {
  (Uint8Array as any).prototype.toBase64 = function (options = {}) {
    // handle invalid options
    if (options && typeof options !== 'object') {
      throw new TypeError('Options must be an object');
    }

    // validate alphabet parameter
    const alphabet = (options as any).alphabet || 'base64';
    if (!['base64', 'base64url'].includes(alphabet)) {
      throw new TypeError('Invalid alphabet specified');
    }

    // convert bytes to binary string
    let binary = '';
    this.forEach((byte: any) => {
      binary += String.fromCharCode(byte);
    });

    // use native btoa if available
    let base64 = btoa(binary);

    // convert to URL-safe alphabet if needed
    if (alphabet === 'base64url') {
      base64 = base64.replace(/\+/g, '-').replace(/\//g, '_');
    }

    // handle padding removal
    if ((options as any).omitPadding) {
      base64 = base64.replace(/=+$/, '');
    }

    return base64;
  };
}

// static method polyfill for Uint8Array.fromBase64
if (!(Uint8Array as any).fromBase64) {
  (Uint8Array as any).fromBase64 = function (base64String: string, options = {}) {
    // handle invalid options
    if (options && typeof options !== 'object') {
      throw new TypeError('Options must be an object');
    }

    // validate alphabet parameter
    const alphabet = (options as any).alphabet || 'base64';
    if (!['base64', 'base64url'].includes(alphabet)) {
      throw new TypeError('Invalid alphabet specified');
    }

    // clean input (remove whitespace)
    let cleaned = base64String?.replace(/\s/g, '');

    // convert URL-safe alphabet to standard base64
    if (alphabet === 'base64url') {
      cleaned = cleaned?.replace(/-/g, '+').replace(/_/g, '/');
    }

    // add padding if needed (unless specified otherwise in options)
    if (!(options as any).omitPadding) {
      const padLength = (4 - (cleaned?.length % 4)) % 4;

      // added padding handling option
      cleaned += '='.repeat(padLength);
    }

    // use native atob if available
    const binaryString = atob(cleaned);

    // convert binary string to Uint8Array
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  };
}

// decompress base64url gzip to string
async function decompressFromBase64Url(b64: string | null) {
  if (b64) {
    const compressedArray = (Uint8Array as any).fromBase64(b64, {
      alphabet: 'base64url',
    });

    const decompressedStream = new Blob([compressedArray])
      .stream()
      .pipeThrough(new DecompressionStream('gzip'));

    const decompressedBlob = await new Response(decompressedStream).blob();

    return await decompressedBlob.text();
  }

  return '';
}

// compress string to base64url gzip
async function compressToBase64Url(str: string): Promise<string> {
  const input = new TextEncoder().encode(str);
  const compressedStream = new Blob([input]).stream().pipeThrough(new CompressionStream('gzip'));

  const compressedBlob = await new Response(compressedStream).blob();

  const compressedArray = new (Uint8Array as any)(await compressedBlob.arrayBuffer());

  return compressedArray.toBase64({ alphabet: 'base64url' });
}

export enum QUERY_PARAM_KEY {
  PEER = 'cid',
}

export const buildImageContainer = (
  file: File,
  fileType: string,
  fileName: string,
  doc: Document,
): HTMLElement => {
  const imageContainer = doc.createElement('section');
  imageContainer.style.alignItems = 'start';
  imageContainer.style.display = 'flex';
  imageContainer.style.flexDirection = 'column';
  imageContainer.style.padding = '0.5rem 0 0.5rem 0';

  const img = doc.createElement('img');
  img.style.maxWidth = '100%';
  img.style.maxHeight = '75vh';
  img.src = getObjectUrl(file, fileType);

  const imgLink = doc.createElement('a');

  imgLink.appendChild(img);
  imgLink.setAttribute('href', img.src);
  imgLink.setAttribute('download', fileName);

  imgLink.style.color = '#fff';

  imageContainer.append(imgLink);

  return imageContainer;
};

export const buildVideoContainer = (file: File, fileType: string, doc: Document): HTMLElement => {
  const videoContainer = doc.createElement('section');
  videoContainer.classList.toggle('video');

  const video = doc.createElement('video');
  video.setAttribute('playsinline', 'playsinline');
  video.setAttribute('controls', 'controls');
  video.setAttribute('muted', 'muted');

  video.style.height = '100%';
  video.style.width = '100%';
  video.src = getObjectUrl(file, fileType);

  videoContainer.append(video);

  return videoContainer;
};

export const getDateParagraph = (id: string, name: any, date: any, doc: Document) => {
  const paragraph = doc.createElement(QUERY_PARAM_KEY.PEER);
  paragraph.setAttribute('class', `${id}-text`);

  const idTag = doc.createElement('span');
  idTag.setAttribute('class', 'id-string');
  idTag.appendChild(doc.createTextNode(name));

  const dateSpan = doc.createElement('span');
  dateSpan.setAttribute('class', 'date-string');
  dateSpan.appendChild(doc.createTextNode(` @ ${date}: `));

  paragraph.appendChild(idTag);
  paragraph.appendChild(dateSpan);

  return paragraph;
};

export const getChatParagraph = (id: string, name: any, date: any, text: any, doc: Document) => {
  const paragraph = getDateParagraph(id, name, date, doc);

  const textSpan = doc.createElement('span');
  textSpan.setAttribute('class', 'text-string');
  textSpan.appendChild(doc.createTextNode(text));

  paragraph.appendChild(textSpan);

  return paragraph;
};

export const getFileChatParagraph = (
  id: string,
  name: any,
  date: any,
  data: any,
  doc: Document,
) => {
  const paragraph = getDateParagraph(id, name, date, doc);
  paragraph.appendChild(doc.createElement('br'));

  const fileBlobUrl = URL.createObjectURL(new Blob([data?.detail?.file]));

  // some videos we'll try to display
  if (data?.detail?.fileType === 'video/webm' || data?.detail?.fileType === 'video/mp4') {
    const videoElement = doc.createElement('video');
    videoElement.setAttribute('controls', '');
    videoElement.setAttribute('src', fileBlobUrl);

    paragraph.appendChild(videoElement);

    videoElement.play();
  }

  if (
    data?.detail?.fileType === 'image/gif' ||
    data?.detail?.fileType === 'image/jpeg' ||
    data?.detail?.fileType === 'image/png' ||
    data?.detail?.fileType === 'image/webp'
  ) {
    const imageElement = doc.createElement('img');
    imageElement.setAttribute('style', 'max-width: 100%;');
    imageElement.setAttribute('src', fileBlobUrl);

    paragraph.appendChild(imageElement);
  } else {
    // all files are appended to the log
    const anchorElement = doc.createElement('a');
    anchorElement.appendChild(doc.createTextNode(data?.detail?.fileName));
    anchorElement.setAttribute('download', data?.detail?.fileName);
    anchorElement.setAttribute('controls', '');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.setAttribute('href', fileBlobUrl);

    paragraph.appendChild(anchorElement);
  }

  return paragraph;
};

export const getConfig = async (searchParam: any) => {
  const decompressedSearchParam = await decompressFromBase64Url(searchParam);

  return searchParam && decompressedSearchParam ? JSON.parse(decompressedSearchParam) : {};
};

export const getDateString = () =>
  new Intl.DateTimeFormat('en-CA', {
    hour12: true,
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date());

export const getLongDateString = () =>
  new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 3,
    hour12: false,
  }).format(new Date());

export const getMyEncodedURIComponent = async (myId: string, peerId: string) =>
  await compressToBase64Url(
    JSON.stringify({
      m: myId,
      p: peerId,
    }),
  );

export const getObjectUrl = (file: File, fileType: string) =>
  URL.createObjectURL(
    new Blob([file], {
      type: fileType,
    }),
  );

export const getPeerClient = async (
  myId: string,
  config: { debug?: 1 | 2 | 3 } = {},
): Promise<Peer> => {
  if (config.debug) {
    console.log(`using config: ${JSON.stringify(config)}`);
  }

  // lazy load peerjs
  const { Peer } = await import('peerjs');

  return new Peer(myId, config);
};

export const getPeerEncodedURIComponent = async (myId: string, peerId: string) =>
  await compressToBase64Url(
    JSON.stringify({
      m: peerId,
      p: myId,
    }),
  );

export const getQueryParamKey = () => QUERY_PARAM_KEY.PEER;
export const getPeerQueryParamVal = async (myId: string, peerId: string) =>
  `${await getPeerEncodedURIComponent(myId, peerId)}`;

export const getPeerUrl = async (myId: string, peerId: string) =>
  `${globalThis.location?.pathname.replace(
    /(\/playground\/peer|\/apps\/playground\/peer)$/,
    `${globalThis.location?.origin}/${isDevMode() ? 'playground/peer' : 'apps/playground/peer'}`,
  )}?${getQueryParamKey()}=${await getPeerQueryParamVal(myId, peerId)}`;

export const getAuthorStyle = (author: string) => `
    ${getMessageStyle(author)}
    background-color: var(--peer-message-author);
    color: var(--peer-message-author-color);
    font-size: xx-small;
`;

export const getMessageStyle = (author: string) => `
  background-color: ${author === 'peer' ? 'var(--peer-message-peer)' : 'var(--peer-message-me)'};
  border-radius: 0.75rem;
  color: ${author === 'peer' ? 'var(--peer-message-peer-color)' : 'var(--peer-message-me-color)'};
  line-height: 3;
  padding: 0.75rem;
  box-decoration-break: clone;
`;

export const getMyQueryParamVal = async (myId: string, peerId: string) =>
  `${await getMyEncodedURIComponent(myId, peerId)}`;

export const getMyUrl = async (myId: string, peerId: string) =>
  `${globalThis.location?.pathname.replace(
    /(\/playground\/peer|\/apps\/playground\/peer)$/,
    `${globalThis.location?.origin}/${isDevMode() ? 'playground/peer' : 'apps/playground/peer'}`,
  )}?${getQueryParamKey()}=${await getMyQueryParamVal(myId, peerId)}`;

export const getRandomId = () => uuidv5(uuidv4(), uuidv5.URL);

export const getSha256 = async (input: ArrayBuffer | string): Promise<string> => {
  let buffer;

  if (typeof input === 'string') {
    buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  }

  if (input instanceof ArrayBuffer) {
    buffer = await crypto.subtle.digest('SHA-256', input);
  }

  return buffer
    ? Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
    : '';
};

export const getTextLink = (text: string, textLink: string) =>
  textLink ? `<a style="color: #fff;" href="${textLink}" download="${text}">${text}</a>` : text;

export const prepareChatMessage = (
  doc: Document,
  author: string,
  text: string,
  textLink: string = '',
  additionalHTML: HTMLElement | null = null,
): string => {
  const chatMessage = doc.createElement('section');
  chatMessage.innerHTML = `
      <section style="text-align: justify; padding: 0.5rem 0 0.5rem 0;">
        <span style="${getAuthorStyle(
          author,
        )}">${getDateString()} <em> | </em> <b>${author}</b></span>
        &nbsp;
        <span style="${getMessageStyle(author)}">
          ${getTextLink(text, textLink)}
        </span>
      </section>
    `;

  if (additionalHTML) {
    chatMessage.append(additionalHTML);
  }

  return chatMessage.innerHTML;
};

export const isOtherFileType = (fileType: string): boolean =>
  !isValidImageType(fileType) && !isValidVideoType(fileType);

export const isValidImageType = (imageType: string): boolean => {
  switch (imageType) {
    case 'image/gif':
    case 'image/jpeg':
    case 'image/png':
    case 'image/avif':
    case 'image/webp':
    case 'image/svg':
      return true;
    default:
      return false;
  }
};

export const isValidVideoType = (videoType: string): boolean => {
  switch (videoType) {
    case 'video/mp4':
    case 'video/webm':
    case 'video/mov':
    case 'video/avi':
      return true;
    default:
      return false;
  }
};

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
