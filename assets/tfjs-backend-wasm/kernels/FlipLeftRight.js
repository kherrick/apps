/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
import { FlipLeftRight } from '@tensorflow/tfjs-core';
let wasmFlipLeftRight;
function setup(backend) {
    wasmFlipLeftRight = backend.wasm.cwrap(FlipLeftRight, null /* void */, [
        'number',
        'number',
        'number',
        'number',
        'number',
        'number', // outId
    ]);
}
export function flipLeftRight(args) {
    const { inputs, backend } = args;
    const { image } = inputs;
    const out = backend.makeOutput(image.shape, image.dtype);
    const imageId = backend.dataIdMap.get(image.dataId).id;
    const outId = backend.dataIdMap.get(out.dataId).id;
    const [batch, imageHeight, imageWidth, numChannels] = image.shape;
    wasmFlipLeftRight(imageId, batch, imageHeight, imageWidth, numChannels, outId);
    return out;
}
export const flipLeftRightConfig = {
    kernelName: FlipLeftRight,
    backendName: 'wasm',
    kernelFunc: flipLeftRight,
    setupFunc: setup
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxpcExlZnRSaWdodC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC13YXNtL3NyYy9rZXJuZWxzL0ZsaXBMZWZ0UmlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLGFBQWEsRUFBNEQsTUFBTSx1QkFBdUIsQ0FBQztBQUkvRyxJQUFJLGlCQUUyQyxDQUFDO0FBRWhELFNBQVMsS0FBSyxDQUFDLE9BQW9CO0lBQ2pDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ3JFLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUSxFQUFHLFFBQVE7S0FDcEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQ3pCLElBQXlEO0lBQzNELE1BQU0sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQy9CLE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFFdkIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFbkQsTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFFbEUsaUJBQWlCLENBQ2IsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBaUI7SUFDL0MsVUFBVSxFQUFFLGFBQWE7SUFDekIsV0FBVyxFQUFFLE1BQU07SUFDbkIsVUFBVSxFQUFFLGFBQXNDO0lBQ2xELFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7RmxpcExlZnRSaWdodCwgRmxpcExlZnRSaWdodElucHV0cywgS2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBUZW5zb3JJbmZvfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge0JhY2tlbmRXYXNtfSBmcm9tICcuLi9iYWNrZW5kX3dhc20nO1xuXG5sZXQgd2FzbUZsaXBMZWZ0UmlnaHQ6IChcbiAgICB4SWQ6IG51bWJlciwgYmF0Y2g6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlciwgaW1hZ2VXaWR0aDogbnVtYmVyLFxuICAgIG51bUNoYW5uZWxzOiBudW1iZXIsIG91dElkOiBudW1iZXIpID0+IHZvaWQ7XG5cbmZ1bmN0aW9uIHNldHVwKGJhY2tlbmQ6IEJhY2tlbmRXYXNtKSB7XG4gIHdhc21GbGlwTGVmdFJpZ2h0ID0gYmFja2VuZC53YXNtLmN3cmFwKEZsaXBMZWZ0UmlnaHQsIG51bGwgLyogdm9pZCAqLywgW1xuICAgICdudW1iZXInLCAgLy8geElkXG4gICAgJ251bWJlcicsICAvLyBiYXRjaFxuICAgICdudW1iZXInLCAgLy8gaW1hZ2VIZWlnaHRcbiAgICAnbnVtYmVyJywgIC8vIGltYWdlV2lkdGhcbiAgICAnbnVtYmVyJywgIC8vIG51bUNoYW5uZWxzXG4gICAgJ251bWJlcicsICAvLyBvdXRJZFxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBMZWZ0UmlnaHQoXG4gICAgYXJnczoge2lucHV0czogRmxpcExlZnRSaWdodElucHV0cywgYmFja2VuZDogQmFja2VuZFdhc219KTogVGVuc29ySW5mbyB7XG4gIGNvbnN0IHtpbnB1dHMsIGJhY2tlbmR9ID0gYXJncztcbiAgY29uc3Qge2ltYWdlfSA9IGlucHV0cztcblxuICBjb25zdCBvdXQgPSBiYWNrZW5kLm1ha2VPdXRwdXQoaW1hZ2Uuc2hhcGUsIGltYWdlLmR0eXBlKTtcbiAgY29uc3QgaW1hZ2VJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChpbWFnZS5kYXRhSWQpLmlkO1xuICBjb25zdCBvdXRJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChvdXQuZGF0YUlkKS5pZDtcblxuICBjb25zdCBbYmF0Y2gsIGltYWdlSGVpZ2h0LCBpbWFnZVdpZHRoLCBudW1DaGFubmVsc10gPSBpbWFnZS5zaGFwZTtcblxuICB3YXNtRmxpcExlZnRSaWdodChcbiAgICAgIGltYWdlSWQsIGJhdGNoLCBpbWFnZUhlaWdodCwgaW1hZ2VXaWR0aCwgbnVtQ2hhbm5lbHMsIG91dElkKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGNvbnN0IGZsaXBMZWZ0UmlnaHRDb25maWc6IEtlcm5lbENvbmZpZyA9IHtcbiAga2VybmVsTmFtZTogRmxpcExlZnRSaWdodCxcbiAgYmFja2VuZE5hbWU6ICd3YXNtJyxcbiAga2VybmVsRnVuYzogZmxpcExlZnRSaWdodCBhcyB1bmtub3duIGFzIEtlcm5lbEZ1bmMsXG4gIHNldHVwRnVuYzogc2V0dXBcbn07XG4iXX0=