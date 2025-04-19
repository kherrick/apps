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
import { RotateWithOffset } from '@tensorflow/tfjs-core';
import { backend_util } from '@tensorflow/tfjs-core';
let wasmRotate;
function setup(backend) {
    wasmRotate = backend.wasm.cwrap(RotateWithOffset, null /* void */, [
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'array',
        'number',
        'number', // outId
    ]);
}
export function rotateWithOffset(args) {
    const { inputs, backend, attrs } = args;
    const { image } = inputs;
    const { radians, fillValue, center } = attrs;
    const out = backend.makeOutput(image.shape, image.dtype);
    const imageId = backend.dataIdMap.get(image.dataId).id;
    const outId = backend.dataIdMap.get(out.dataId).id;
    const [batch, imageHeight, imageWidth, numChannels] = image.shape;
    const [centerX, centerY] = backend_util.getImageCenter(center, imageHeight, imageWidth);
    const fillIsBlack = fillValue === 0;
    const fullOpacityValue = 255;
    const fillValues = typeof fillValue === 'number' ?
        [fillValue, fillValue, fillValue, fillIsBlack ? 0 : fullOpacityValue] :
        [...fillValue, fullOpacityValue];
    const fillBytes = new Uint8Array(new Int32Array(fillValues).buffer);
    wasmRotate(imageId, batch, imageHeight, imageWidth, numChannels, radians, centerX, centerY, fillBytes, fillValues.length, outId);
    return out;
}
export const rotateWithOffsetConfig = {
    kernelName: RotateWithOffset,
    backendName: 'wasm',
    kernelFunc: rotateWithOffset,
    setupFunc: setup
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm90YXRlV2l0aE9mZnNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC13YXNtL3NyYy9rZXJuZWxzL1JvdGF0ZVdpdGhPZmZzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUEyQixnQkFBZ0IsRUFBNEQsTUFBTSx1QkFBdUIsQ0FBQztBQUM1SSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFJbkQsSUFBSSxVQUdpRSxDQUFDO0FBRXRFLFNBQVMsS0FBSyxDQUFDLE9BQW9CO0lBQ2pDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2pFLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsT0FBTztRQUNQLFFBQVE7UUFDUixRQUFRLEVBQUcsUUFBUTtLQUNwQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBSWhDO0lBQ0MsTUFBTSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFDdkIsTUFBTSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLEdBQUcsS0FBSyxDQUFDO0lBRTNDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRW5ELE1BQU0sQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBRWxFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQ3BCLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVqRSxNQUFNLFdBQVcsR0FBRyxTQUFTLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0lBRTdCLE1BQU0sVUFBVSxHQUFHLE9BQU8sU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEdBQUcsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEUsVUFBVSxDQUNOLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFpQjtJQUNsRCxVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFVBQVUsRUFBRSxnQkFBeUM7SUFDckQsU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtLZXJuZWxDb25maWcsIEtlcm5lbEZ1bmMsIFJvdGF0ZVdpdGhPZmZzZXQsIFJvdGF0ZVdpdGhPZmZzZXRBdHRycywgUm90YXRlV2l0aE9mZnNldElucHV0cywgVGVuc29ySW5mb30gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7YmFja2VuZF91dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge0JhY2tlbmRXYXNtfSBmcm9tICcuLi9iYWNrZW5kX3dhc20nO1xuXG5sZXQgd2FzbVJvdGF0ZTogKFxuICAgIHhJZDogbnVtYmVyLCBiYXRjaDogbnVtYmVyLCBpbWFnZUhlaWdodDogbnVtYmVyLCBpbWFnZVdpZHRoOiBudW1iZXIsXG4gICAgbnVtQ2hhbm5lbHM6IG51bWJlciwgcmFkaWFuczogbnVtYmVyLCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlcixcbiAgICBmaWxsQnl0ZXM6IFVpbnQ4QXJyYXksIGZpbGxMZW5ndGg6IG51bWJlciwgb3V0SWQ6IG51bWJlcikgPT4gdm9pZDtcblxuZnVuY3Rpb24gc2V0dXAoYmFja2VuZDogQmFja2VuZFdhc20pIHtcbiAgd2FzbVJvdGF0ZSA9IGJhY2tlbmQud2FzbS5jd3JhcChSb3RhdGVXaXRoT2Zmc2V0LCBudWxsIC8qIHZvaWQgKi8sIFtcbiAgICAnbnVtYmVyJywgIC8vIHhJZFxuICAgICdudW1iZXInLCAgLy8gYmF0Y2hcbiAgICAnbnVtYmVyJywgIC8vIGltYWdlSGVpZ2h0XG4gICAgJ251bWJlcicsICAvLyBpbWFnZVdpZHRoXG4gICAgJ251bWJlcicsICAvLyBudW1DaGFubmVsc1xuICAgICdudW1iZXInLCAgLy8gcmFkaWFuc1xuICAgICdudW1iZXInLCAgLy8gY2VudGVyWFxuICAgICdudW1iZXInLCAgLy8gY2VudGVyWVxuICAgICdhcnJheScsICAgLy8gZmlsbEJ5dGVzXG4gICAgJ251bWJlcicsICAvLyBmaWxsTGVuZ3RoXG4gICAgJ251bWJlcicsICAvLyBvdXRJZFxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVdpdGhPZmZzZXQoYXJnczoge1xuICBpbnB1dHM6IFJvdGF0ZVdpdGhPZmZzZXRJbnB1dHMsXG4gIGJhY2tlbmQ6IEJhY2tlbmRXYXNtLFxuICBhdHRyczogUm90YXRlV2l0aE9mZnNldEF0dHJzXG59KTogVGVuc29ySW5mbyB7XG4gIGNvbnN0IHtpbnB1dHMsIGJhY2tlbmQsIGF0dHJzfSA9IGFyZ3M7XG4gIGNvbnN0IHtpbWFnZX0gPSBpbnB1dHM7XG4gIGNvbnN0IHtyYWRpYW5zLCBmaWxsVmFsdWUsIGNlbnRlcn0gPSBhdHRycztcblxuICBjb25zdCBvdXQgPSBiYWNrZW5kLm1ha2VPdXRwdXQoaW1hZ2Uuc2hhcGUsIGltYWdlLmR0eXBlKTtcbiAgY29uc3QgaW1hZ2VJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChpbWFnZS5kYXRhSWQpLmlkO1xuICBjb25zdCBvdXRJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChvdXQuZGF0YUlkKS5pZDtcblxuICBjb25zdCBbYmF0Y2gsIGltYWdlSGVpZ2h0LCBpbWFnZVdpZHRoLCBudW1DaGFubmVsc10gPSBpbWFnZS5zaGFwZTtcblxuICBjb25zdCBbY2VudGVyWCwgY2VudGVyWV0gPVxuICAgICAgYmFja2VuZF91dGlsLmdldEltYWdlQ2VudGVyKGNlbnRlciwgaW1hZ2VIZWlnaHQsIGltYWdlV2lkdGgpO1xuXG4gIGNvbnN0IGZpbGxJc0JsYWNrID0gZmlsbFZhbHVlID09PSAwO1xuICBjb25zdCBmdWxsT3BhY2l0eVZhbHVlID0gMjU1O1xuXG4gIGNvbnN0IGZpbGxWYWx1ZXMgPSB0eXBlb2YgZmlsbFZhbHVlID09PSAnbnVtYmVyJyA/XG4gICAgICBbZmlsbFZhbHVlLCBmaWxsVmFsdWUsIGZpbGxWYWx1ZSwgZmlsbElzQmxhY2sgPyAwIDogZnVsbE9wYWNpdHlWYWx1ZV0gOlxuICAgICAgWy4uLmZpbGxWYWx1ZSwgZnVsbE9wYWNpdHlWYWx1ZV07XG4gIGNvbnN0IGZpbGxCeXRlcyA9IG5ldyBVaW50OEFycmF5KG5ldyBJbnQzMkFycmF5KGZpbGxWYWx1ZXMpLmJ1ZmZlcik7XG5cbiAgd2FzbVJvdGF0ZShcbiAgICAgIGltYWdlSWQsIGJhdGNoLCBpbWFnZUhlaWdodCwgaW1hZ2VXaWR0aCwgbnVtQ2hhbm5lbHMsIHJhZGlhbnMsIGNlbnRlclgsXG4gICAgICBjZW50ZXJZLCBmaWxsQnl0ZXMsIGZpbGxWYWx1ZXMubGVuZ3RoLCBvdXRJZCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBjb25zdCByb3RhdGVXaXRoT2Zmc2V0Q29uZmlnOiBLZXJuZWxDb25maWcgPSB7XG4gIGtlcm5lbE5hbWU6IFJvdGF0ZVdpdGhPZmZzZXQsXG4gIGJhY2tlbmROYW1lOiAnd2FzbScsXG4gIGtlcm5lbEZ1bmM6IHJvdGF0ZVdpdGhPZmZzZXQgYXMgdW5rbm93biBhcyBLZXJuZWxGdW5jLFxuICBzZXR1cEZ1bmM6IHNldHVwXG59O1xuIl19