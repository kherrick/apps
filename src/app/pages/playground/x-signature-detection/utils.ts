export const MODEL_ROOT = 'https://kherrick.github.io/signature-detection';
export const MODEL_PATH = 'signature-detection/models/yolov8s/1/model.onnx';

export function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16),
  );
}
