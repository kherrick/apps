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
import { backend_util, Sum, util } from '@tensorflow/tfjs-core';
import { permuteAxesAndTranspose } from './kernel_utils';
import { CppDType } from './types';
let wasmSum;
function setup(backend) {
    wasmSum = backend.wasm.cwrap(Sum, null /*void*/, [
        'number',
        'number',
        'number',
        'number', // out_id
    ]);
}
function sum(args) {
    const { backend, inputs, attrs } = args;
    const { axis, keepDims } = attrs;
    const { x } = inputs;
    const xId = backend.dataIdMap.get(x.dataId).id;
    let inputId = xId;
    let input = x;
    const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
    let reductionAxes = axes;
    if (inputWasTransposed) {
        const transposedId = backend.dataIdMap.get(transposed.dataId).id;
        if (transposedId !== xId) {
            // transpose was not a no-op. We will need to dispose of this
            // once we are done.
            input = transposed;
            inputId = transposedId;
            reductionAxes = backend_util.getInnerMostAxes(reductionAxes.length, input.shape.length);
        }
    }
    backend_util.assertAxesAreInnerMostDims('sum', reductionAxes, input.shape.length);
    const [outShape, reduceShape] = backend_util.computeOutAndReduceShapes(input.shape, reductionAxes);
    const reduceSize = util.sizeFromShape(reduceShape);
    const out = backend.makeOutput(outShape, input.dtype);
    if (util.sizeFromShape(input.shape) !== 0) {
        const outId = backend.dataIdMap.get(out.dataId).id;
        wasmSum(inputId, reduceSize, CppDType[out.dtype], outId);
    }
    if (inputWasTransposed) {
        // dispose of the transposed tensor.
        backend.disposeData(transposed.dataId);
    }
    if (keepDims) {
        // reshape
        const newShape = backend_util.expandShapeToKeepDim(out.shape, originalAxes);
        out.shape = newShape;
    }
    return out;
}
export const sumConfig = {
    kernelName: Sum,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: sum
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLXdhc20vc3JjL2tlcm5lbHMvU3VtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQTRCLEdBQUcsRUFBbUMsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFJekgsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVqQyxJQUFJLE9BQ0ksQ0FBQztBQUVULFNBQVMsS0FBSyxDQUFDLE9BQW9CO0lBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUMvQyxRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRLEVBQUcsU0FBUztLQUNyQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsSUFBZ0U7SUFFM0UsTUFBTSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLE1BQU0sRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEdBQUcsS0FBSyxDQUFDO0lBQy9CLE1BQU0sRUFBQyxDQUFDLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFDbkIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDbEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsTUFBTSxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLEdBQ3RELHVCQUF1QixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFOUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLElBQUksa0JBQWtCLEVBQUU7UUFDdEIsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRSxJQUFJLFlBQVksS0FBSyxHQUFHLEVBQUU7WUFDeEIsNkRBQTZEO1lBQzdELG9CQUFvQjtZQUNwQixLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ25CLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFDdkIsYUFBYSxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDekMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO0tBQ0Y7SUFFRCxZQUFZLENBQUMsMEJBQTBCLENBQ25DLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUN6QixZQUFZLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN2RSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRW5ELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN6QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDMUQ7SUFFRCxJQUFJLGtCQUFrQixFQUFFO1FBQ3RCLG9DQUFvQztRQUNwQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4QztJQUVELElBQUksUUFBUSxFQUFFO1FBQ1osVUFBVTtRQUNWLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzVFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0tBQ3RCO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFpQjtJQUNyQyxVQUFVLEVBQUUsR0FBRztJQUNmLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxHQUE0QjtDQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2JhY2tlbmRfdXRpbCwgS2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBTdW0sIFN1bUF0dHJzLCBTdW1JbnB1dHMsIFRlbnNvckluZm8sIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7QmFja2VuZFdhc219IGZyb20gJy4uL2JhY2tlbmRfd2FzbSc7XG5cbmltcG9ydCB7cGVybXV0ZUF4ZXNBbmRUcmFuc3Bvc2V9IGZyb20gJy4va2VybmVsX3V0aWxzJztcbmltcG9ydCB7Q3BwRFR5cGV9IGZyb20gJy4vdHlwZXMnO1xuXG5sZXQgd2FzbVN1bTogKHhJZDogbnVtYmVyLCByZWR1Y2VTaXplOiBudW1iZXIsIGR0eXBlOiBudW1iZXIsIG91dElkOiBudW1iZXIpID0+XG4gICAgdm9pZDtcblxuZnVuY3Rpb24gc2V0dXAoYmFja2VuZDogQmFja2VuZFdhc20pOiB2b2lkIHtcbiAgd2FzbVN1bSA9IGJhY2tlbmQud2FzbS5jd3JhcChTdW0sIG51bGwgLyp2b2lkKi8sIFtcbiAgICAnbnVtYmVyJywgIC8vIGlucHV0X2lkXG4gICAgJ251bWJlcicsICAvLyByZWR1Y2Vfc2l6ZVxuICAgICdudW1iZXInLCAgLy8gZHR5cGVcbiAgICAnbnVtYmVyJywgIC8vIG91dF9pZFxuICBdKTtcbn1cblxuZnVuY3Rpb24gc3VtKGFyZ3M6IHtiYWNrZW5kOiBCYWNrZW5kV2FzbSwgaW5wdXRzOiBTdW1JbnB1dHMsIGF0dHJzOiBTdW1BdHRyc30pOlxuICAgIFRlbnNvckluZm8ge1xuICBjb25zdCB7YmFja2VuZCwgaW5wdXRzLCBhdHRyc30gPSBhcmdzO1xuICBjb25zdCB7YXhpcywga2VlcERpbXN9ID0gYXR0cnM7XG4gIGNvbnN0IHt4fSA9IGlucHV0cztcbiAgY29uc3QgeElkID0gYmFja2VuZC5kYXRhSWRNYXAuZ2V0KHguZGF0YUlkKS5pZDtcbiAgbGV0IGlucHV0SWQgPSB4SWQ7XG4gIGxldCBpbnB1dCA9IHg7XG5cbiAgY29uc3Qge3RyYW5zcG9zZWQsIGF4ZXMsIG9yaWdpbmFsQXhlcywgaW5wdXRXYXNUcmFuc3Bvc2VkfSA9XG4gICAgICBwZXJtdXRlQXhlc0FuZFRyYW5zcG9zZSh4LCBheGlzLCBiYWNrZW5kKTtcblxuICBsZXQgcmVkdWN0aW9uQXhlcyA9IGF4ZXM7XG4gIGlmIChpbnB1dFdhc1RyYW5zcG9zZWQpIHtcbiAgICBjb25zdCB0cmFuc3Bvc2VkSWQgPSBiYWNrZW5kLmRhdGFJZE1hcC5nZXQodHJhbnNwb3NlZC5kYXRhSWQpLmlkO1xuICAgIGlmICh0cmFuc3Bvc2VkSWQgIT09IHhJZCkge1xuICAgICAgLy8gdHJhbnNwb3NlIHdhcyBub3QgYSBuby1vcC4gV2Ugd2lsbCBuZWVkIHRvIGRpc3Bvc2Ugb2YgdGhpc1xuICAgICAgLy8gb25jZSB3ZSBhcmUgZG9uZS5cbiAgICAgIGlucHV0ID0gdHJhbnNwb3NlZDtcbiAgICAgIGlucHV0SWQgPSB0cmFuc3Bvc2VkSWQ7XG4gICAgICByZWR1Y3Rpb25BeGVzID0gYmFja2VuZF91dGlsLmdldElubmVyTW9zdEF4ZXMoXG4gICAgICAgICAgcmVkdWN0aW9uQXhlcy5sZW5ndGgsIGlucHV0LnNoYXBlLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgYmFja2VuZF91dGlsLmFzc2VydEF4ZXNBcmVJbm5lck1vc3REaW1zKFxuICAgICAgJ3N1bScsIHJlZHVjdGlvbkF4ZXMsIGlucHV0LnNoYXBlLmxlbmd0aCk7XG4gIGNvbnN0IFtvdXRTaGFwZSwgcmVkdWNlU2hhcGVdID1cbiAgICAgIGJhY2tlbmRfdXRpbC5jb21wdXRlT3V0QW5kUmVkdWNlU2hhcGVzKGlucHV0LnNoYXBlLCByZWR1Y3Rpb25BeGVzKTtcbiAgY29uc3QgcmVkdWNlU2l6ZSA9IHV0aWwuc2l6ZUZyb21TaGFwZShyZWR1Y2VTaGFwZSk7XG5cbiAgY29uc3Qgb3V0ID0gYmFja2VuZC5tYWtlT3V0cHV0KG91dFNoYXBlLCBpbnB1dC5kdHlwZSk7XG4gIGlmICh1dGlsLnNpemVGcm9tU2hhcGUoaW5wdXQuc2hhcGUpICE9PSAwKSB7XG4gICAgY29uc3Qgb3V0SWQgPSBiYWNrZW5kLmRhdGFJZE1hcC5nZXQob3V0LmRhdGFJZCkuaWQ7XG4gICAgd2FzbVN1bShpbnB1dElkLCByZWR1Y2VTaXplLCBDcHBEVHlwZVtvdXQuZHR5cGVdLCBvdXRJZCk7XG4gIH1cblxuICBpZiAoaW5wdXRXYXNUcmFuc3Bvc2VkKSB7XG4gICAgLy8gZGlzcG9zZSBvZiB0aGUgdHJhbnNwb3NlZCB0ZW5zb3IuXG4gICAgYmFja2VuZC5kaXNwb3NlRGF0YSh0cmFuc3Bvc2VkLmRhdGFJZCk7XG4gIH1cblxuICBpZiAoa2VlcERpbXMpIHtcbiAgICAvLyByZXNoYXBlXG4gICAgY29uc3QgbmV3U2hhcGUgPSBiYWNrZW5kX3V0aWwuZXhwYW5kU2hhcGVUb0tlZXBEaW0ob3V0LnNoYXBlLCBvcmlnaW5hbEF4ZXMpO1xuICAgIG91dC5zaGFwZSA9IG5ld1NoYXBlO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGNvbnN0IHN1bUNvbmZpZzogS2VybmVsQ29uZmlnID0ge1xuICBrZXJuZWxOYW1lOiBTdW0sXG4gIGJhY2tlbmROYW1lOiAnd2FzbScsXG4gIHNldHVwRnVuYzogc2V0dXAsXG4gIGtlcm5lbEZ1bmM6IHN1bSBhcyB1bmtub3duIGFzIEtlcm5lbEZ1bmNcbn07XG4iXX0=