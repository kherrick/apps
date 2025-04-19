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
import { OneHot } from '@tensorflow/tfjs-core';
let wasmOneHot;
function setup(backend) {
    wasmOneHot = backend.wasm.cwrap(OneHot, null /* void */, [
        'number',
        'number',
        'number',
        'number',
        'number' // out_id
    ]);
}
function oneHot(args) {
    const { inputs, backend, attrs } = args;
    const { indices } = inputs;
    const { dtype, depth, onValue, offValue } = attrs;
    const out = backend.makeOutput([...indices.shape, depth], dtype);
    const outId = backend.dataIdMap.get(out.dataId).id;
    const indicesData = backend.dataIdMap.get(indices.dataId);
    const indicesId = indicesData.id;
    wasmOneHot(indicesId, depth, onValue, offValue, outId);
    return out;
}
export const oneHotConfig = {
    kernelName: OneHot,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: oneHot,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT25lSG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLXdhc20vc3JjL2tlcm5lbHMvT25lSG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBMkIsTUFBTSxFQUE0QixNQUFNLHVCQUF1QixDQUFDO0FBSWxHLElBQUksVUFFc0IsQ0FBQztBQUUzQixTQUFTLEtBQUssQ0FBQyxPQUFvQjtJQUNqQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDdkQsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVEsQ0FBRyxTQUFTO0tBQ3JCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FDWCxJQUFzRTtJQUN4RSxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUM7SUFDdEMsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLE1BQU0sQ0FBQztJQUN6QixNQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLEdBQUcsS0FBSyxDQUFDO0lBRWhELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVuRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQztJQUVqQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBaUI7SUFDeEMsVUFBVSxFQUFFLE1BQU07SUFDbEIsV0FBVyxFQUFFLE1BQU07SUFDbkIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLE1BQStCO0NBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7S2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBPbmVIb3QsIE9uZUhvdEF0dHJzLCBPbmVIb3RJbnB1dHN9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7QmFja2VuZFdhc219IGZyb20gJy4uL2JhY2tlbmRfd2FzbSc7XG5cbmxldCB3YXNtT25lSG90OiAoXG4gICAgaW5kaWNlc0lkOiBudW1iZXIsIGRlcHRoOiBudW1iZXIsIG9uVmFsdWU6IG51bWJlciwgb2ZmVmFsdWU6IG51bWJlcixcbiAgICBvdXRJZDogbnVtYmVyKSA9PiB2b2lkO1xuXG5mdW5jdGlvbiBzZXR1cChiYWNrZW5kOiBCYWNrZW5kV2FzbSkge1xuICB3YXNtT25lSG90ID0gYmFja2VuZC53YXNtLmN3cmFwKE9uZUhvdCwgbnVsbCAvKiB2b2lkICovLCBbXG4gICAgJ251bWJlcicsICAvLyBpbmRpY2VzX2lkXG4gICAgJ251bWJlcicsICAvLyBkZXB0aCxcbiAgICAnbnVtYmVyJywgIC8vIG9uVmFsdWVcbiAgICAnbnVtYmVyJywgIC8vIG9mZlZhbHVlXG4gICAgJ251bWJlcicgICAvLyBvdXRfaWRcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG9uZUhvdChcbiAgICBhcmdzOiB7aW5wdXRzOiBPbmVIb3RJbnB1dHMsIGF0dHJzOiBPbmVIb3RBdHRycywgYmFja2VuZDogQmFja2VuZFdhc219KSB7XG4gIGNvbnN0IHtpbnB1dHMsIGJhY2tlbmQsIGF0dHJzfSA9IGFyZ3M7XG4gIGNvbnN0IHtpbmRpY2VzfSA9IGlucHV0cztcbiAgY29uc3Qge2R0eXBlLCBkZXB0aCwgb25WYWx1ZSwgb2ZmVmFsdWV9ID0gYXR0cnM7XG5cbiAgY29uc3Qgb3V0ID0gYmFja2VuZC5tYWtlT3V0cHV0KFsuLi5pbmRpY2VzLnNoYXBlLCBkZXB0aF0sIGR0eXBlKTtcbiAgY29uc3Qgb3V0SWQgPSBiYWNrZW5kLmRhdGFJZE1hcC5nZXQob3V0LmRhdGFJZCkuaWQ7XG5cbiAgY29uc3QgaW5kaWNlc0RhdGEgPSBiYWNrZW5kLmRhdGFJZE1hcC5nZXQoaW5kaWNlcy5kYXRhSWQpO1xuICBjb25zdCBpbmRpY2VzSWQgPSBpbmRpY2VzRGF0YS5pZDtcblxuICB3YXNtT25lSG90KGluZGljZXNJZCwgZGVwdGgsIG9uVmFsdWUsIG9mZlZhbHVlLCBvdXRJZCk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGNvbnN0IG9uZUhvdENvbmZpZzogS2VybmVsQ29uZmlnID0ge1xuICBrZXJuZWxOYW1lOiBPbmVIb3QsXG4gIGJhY2tlbmROYW1lOiAnd2FzbScsXG4gIHNldHVwRnVuYzogc2V0dXAsXG4gIGtlcm5lbEZ1bmM6IG9uZUhvdCBhcyB1bmtub3duIGFzIEtlcm5lbEZ1bmMsXG59O1xuIl19