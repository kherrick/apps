/// <reference lib="webworker" />

import { removeBackground } from '@imgly/background-removal';

export interface ProgressDataMessage {
  type: string;
  key: string;
  current: number;
  total: number;
}

export type ProgressCallback = (
  key: string,
  current: number,
  total: number,
) => void;

const progressCallback: ProgressCallback = (
  key: string,
  current: number,
  total: number,
) => {
  const progressDataMessage: ProgressDataMessage = {
    type: 'progress',
    key,
    current,
    total,
  };

  postMessage(progressDataMessage);
};

addEventListener('message', async (event: MessageEvent) => {
  const { id, imgSrc, config } = event.data;

  try {
    const resultBlob = await removeBackground(imgSrc, {
      ...config,
      progress: progressCallback,
    });

    postMessage({ type: 'result', id, result: resultBlob });
  } catch (error: any) {
    postMessage({ type: 'error', id, error: error.message });
  }
});
