declare module 'onnxruntime-web' {
  export const env: {
    wasm: {
      initTimeout?: number;
      numThreads?: number;
      proxy?: boolean;
      wasmPaths: string | { [key: string]: string };
      worker?: boolean;
    };
    [key: string]: any;
  };

  export class InferenceSession {
    static create(path: string, options?: any): Promise<InferenceSession>;
    run(
      feeds: { [name: string]: Tensor },
      fetches?: string[],
    ): Promise<{ [name: string]: Tensor }>;
  }

  export class Tensor {
    constructor(type: string, data: any, dims?: readonly number[]);
    data: any;
    dims: number[];
  }
}
