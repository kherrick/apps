/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import { Softmax, util } from '@tensorflow/tfjs-core';
let wasmFunc;
function setup(backend) {
    wasmFunc = backend.wasm.cwrap(Softmax, null /* void */, [
        'number',
        'number',
        'number',
        'number' // batch
    ]);
}
export function softmax(args) {
    const { backend, inputs: { logits }, attrs: { dim } } = args;
    const xId = backend.dataIdMap.get(logits.dataId).id;
    const out = backend.makeOutput(logits.shape, logits.dtype);
    const outId = backend.dataIdMap.get(out.dataId).id;
    const channels = logits.shape[dim];
    const batch = util.sizeFromShape(logits.shape) / channels;
    // Short-circuit zero-sized tensors.
    if (util.sizeFromShape(out.shape) === 0) {
        return out;
    }
    wasmFunc(xId, outId, channels, batch);
    return out;
}
export const softmaxConfig = {
    kernelName: Softmax,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: softmax
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29mdG1heC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC13YXNtL3NyYy9rZXJuZWxzL1NvZnRtYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUEyQixPQUFPLEVBQTJDLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBSXZILElBQUksUUFDSSxDQUFDO0FBRVQsU0FBUyxLQUFLLENBQUMsT0FBb0I7SUFDakMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ3RELFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVEsQ0FBRyxRQUFRO0tBQ3BCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNuQixJQUF3RTtJQUUxRSxNQUFNLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEtBQUssRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRW5ELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBRTFELG9DQUFvQztJQUNwQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QyxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBaUI7SUFDekMsVUFBVSxFQUFFLE9BQU87SUFDbkIsV0FBVyxFQUFFLE1BQU07SUFDbkIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLE9BQWdDO0NBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7S2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBTb2Z0bWF4LCBTb2Z0bWF4QXR0cnMsIFNvZnRtYXhJbnB1dHMsIFRlbnNvckluZm8sIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7QmFja2VuZFdhc219IGZyb20gJy4uL2JhY2tlbmRfd2FzbSc7XG5cbmxldCB3YXNtRnVuYzogKHhJZDogbnVtYmVyLCBvdXRJZDogbnVtYmVyLCBjaGFubmVsczogbnVtYmVyLCBiYXRjaDogbnVtYmVyKSA9PlxuICAgIHZvaWQ7XG5cbmZ1bmN0aW9uIHNldHVwKGJhY2tlbmQ6IEJhY2tlbmRXYXNtKTogdm9pZCB7XG4gIHdhc21GdW5jID0gYmFja2VuZC53YXNtLmN3cmFwKFNvZnRtYXgsIG51bGwgLyogdm9pZCAqLywgW1xuICAgICdudW1iZXInLCAgLy8geElkXG4gICAgJ251bWJlcicsICAvLyBvdXRJZFxuICAgICdudW1iZXInLCAgLy8gY2hhbm5lbHNcbiAgICAnbnVtYmVyJyAgIC8vIGJhdGNoXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29mdG1heChcbiAgICBhcmdzOiB7YmFja2VuZDogQmFja2VuZFdhc20sIGlucHV0czogU29mdG1heElucHV0cywgYXR0cnM6IFNvZnRtYXhBdHRyc30pOlxuICAgIFRlbnNvckluZm8ge1xuICBjb25zdCB7YmFja2VuZCwgaW5wdXRzOiB7bG9naXRzfSwgYXR0cnM6IHtkaW19fSA9IGFyZ3M7XG4gIGNvbnN0IHhJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChsb2dpdHMuZGF0YUlkKS5pZDtcbiAgY29uc3Qgb3V0ID0gYmFja2VuZC5tYWtlT3V0cHV0KGxvZ2l0cy5zaGFwZSwgbG9naXRzLmR0eXBlKTtcbiAgY29uc3Qgb3V0SWQgPSBiYWNrZW5kLmRhdGFJZE1hcC5nZXQob3V0LmRhdGFJZCkuaWQ7XG5cbiAgY29uc3QgY2hhbm5lbHMgPSBsb2dpdHMuc2hhcGVbZGltXTtcbiAgY29uc3QgYmF0Y2ggPSB1dGlsLnNpemVGcm9tU2hhcGUobG9naXRzLnNoYXBlKSAvIGNoYW5uZWxzO1xuXG4gIC8vIFNob3J0LWNpcmN1aXQgemVyby1zaXplZCB0ZW5zb3JzLlxuICBpZiAodXRpbC5zaXplRnJvbVNoYXBlKG91dC5zaGFwZSkgPT09IDApIHtcbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgd2FzbUZ1bmMoeElkLCBvdXRJZCwgY2hhbm5lbHMsIGJhdGNoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGNvbnN0IHNvZnRtYXhDb25maWc6IEtlcm5lbENvbmZpZyA9IHtcbiAga2VybmVsTmFtZTogU29mdG1heCxcbiAgYmFja2VuZE5hbWU6ICd3YXNtJyxcbiAgc2V0dXBGdW5jOiBzZXR1cCxcbiAga2VybmVsRnVuYzogc29mdG1heCBhcyB1bmtub3duIGFzIEtlcm5lbEZ1bmNcbn07XG4iXX0=