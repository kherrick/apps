/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
import { backend_util, SparseToDense, util } from '@tensorflow/tfjs-core';
import { CppDType } from './types';
let wasmSparseToDense;
function setup(backend) {
    wasmSparseToDense = backend.wasm.cwrap(SparseToDense, null /*void*/, [
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
function sparseToDense(args) {
    const { backend, inputs, attrs } = args;
    const { sparseIndices, sparseValues, defaultValue } = inputs;
    const { outputShape } = attrs;
    const out = backend.makeOutput(outputShape, defaultValue.dtype);
    if (util.sizeFromShape(outputShape) === 0) {
        return out;
    }
    const { sliceRank, numUpdates, sliceSize, strides, outputSize } = backend_util.calculateShapes(sparseValues, sparseIndices, outputShape);
    const sparseIndicesId = backend.dataIdMap.get(sparseIndices.dataId).id;
    const sparseValuesId = backend.dataIdMap.get(sparseValues.dataId).id;
    const defaultValueId = backend.dataIdMap.get(defaultValue.dataId).id;
    const stridesBytes = new Uint8Array(new Int32Array(strides).buffer);
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmSparseToDense(sparseIndicesId, sparseValuesId, sparseValues.shape.length, defaultValueId, CppDType[defaultValue.dtype], sliceRank, numUpdates, sliceSize, stridesBytes, outputSize, outId);
    return out;
}
export const sparseToDenseConfig = {
    kernelName: SparseToDense,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: sparseToDense
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BhcnNlVG9EZW5zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC13YXNtL3NyYy9rZXJuZWxzL1NwYXJzZVRvRGVuc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBNEIsYUFBYSxFQUF1RCxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUl2SixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRWpDLElBQUksaUJBSTBDLENBQUM7QUFFL0MsU0FBUyxLQUFLLENBQUMsT0FBb0I7SUFDakMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDbkUsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVEsRUFBRyxRQUFRO0tBQ3BCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUl0QjtJQUNDLE1BQU0sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQztJQUN0QyxNQUFNLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFDM0QsTUFBTSxFQUFDLFdBQVcsRUFBQyxHQUFHLEtBQUssQ0FBQztJQUU1QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN6QyxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsTUFBTSxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsR0FDekQsWUFBWSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkUsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRXJFLE1BQU0sWUFBWSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBFLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFbkQsaUJBQWlCLENBQ2IsZUFBZSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDMUQsY0FBYyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDbkUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWlCO0lBQy9DLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxhQUFzQztDQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2JhY2tlbmRfdXRpbCwgS2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBTcGFyc2VUb0RlbnNlLCBTcGFyc2VUb0RlbnNlQXR0cnMsIFNwYXJzZVRvRGVuc2VJbnB1dHMsIFRlbnNvckluZm8sIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7QmFja2VuZFdhc219IGZyb20gJy4uL2JhY2tlbmRfd2FzbSc7XG5cbmltcG9ydCB7Q3BwRFR5cGV9IGZyb20gJy4vdHlwZXMnO1xuXG5sZXQgd2FzbVNwYXJzZVRvRGVuc2U6IChcbiAgICBzcGFyc2VJbmRpY2VzSWQ6IG51bWJlciwgc3BhcnNlVmFsdWVzSWQ6IG51bWJlciwgc3BhcnNlVmFsdWVzUmFuazogbnVtYmVyLFxuICAgIGRlZmF1bHRWYWx1ZUlkOiBudW1iZXIsIGR0eXBlOiBDcHBEVHlwZSwgc2xpY2VSYW5rOiBudW1iZXIsXG4gICAgbnVtVXBkYXRlczogbnVtYmVyLCBzbGljZVNpemU6IG51bWJlciwgc3RyaWRlczogVWludDhBcnJheSxcbiAgICBvdXRwdXRTaXplOiBudW1iZXIsIG91dElkOiBudW1iZXIpID0+IHZvaWQ7XG5cbmZ1bmN0aW9uIHNldHVwKGJhY2tlbmQ6IEJhY2tlbmRXYXNtKTogdm9pZCB7XG4gIHdhc21TcGFyc2VUb0RlbnNlID0gYmFja2VuZC53YXNtLmN3cmFwKFNwYXJzZVRvRGVuc2UsIG51bGwgLyp2b2lkKi8sIFtcbiAgICAnbnVtYmVyJywgIC8vIHNwYXJzZUluZGljZXNJZFxuICAgICdudW1iZXInLCAgLy8gc3BhcnNlVmFsdWVzSWRcbiAgICAnbnVtYmVyJywgIC8vIHNwYXJzZVZhbHVlc1JhbmtcbiAgICAnbnVtYmVyJywgIC8vIGRlZmF1bHRWYWx1ZUlkXG4gICAgJ251bWJlcicsICAvLyBkdHlwZVxuICAgICdudW1iZXInLCAgLy8gc2xpY2VSYW5rXG4gICAgJ251bWJlcicsICAvLyBudW1VcGRhdGVzXG4gICAgJ251bWJlcicsICAvLyBzbGljZVNpemVcbiAgICAnYXJyYXknLCAgIC8vIHN0cmlkZXNcbiAgICAnbnVtYmVyJywgIC8vIG91dHB1dFNpemVcbiAgICAnbnVtYmVyJywgIC8vIG91dElkXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzcGFyc2VUb0RlbnNlKGFyZ3M6IHtcbiAgYmFja2VuZDogQmFja2VuZFdhc20sXG4gIGlucHV0czogU3BhcnNlVG9EZW5zZUlucHV0cyxcbiAgYXR0cnM6IFNwYXJzZVRvRGVuc2VBdHRyc1xufSk6IFRlbnNvckluZm8ge1xuICBjb25zdCB7YmFja2VuZCwgaW5wdXRzLCBhdHRyc30gPSBhcmdzO1xuICBjb25zdCB7c3BhcnNlSW5kaWNlcywgc3BhcnNlVmFsdWVzLCBkZWZhdWx0VmFsdWV9ID0gaW5wdXRzO1xuICBjb25zdCB7b3V0cHV0U2hhcGV9ID0gYXR0cnM7XG5cbiAgY29uc3Qgb3V0ID0gYmFja2VuZC5tYWtlT3V0cHV0KG91dHB1dFNoYXBlLCBkZWZhdWx0VmFsdWUuZHR5cGUpO1xuICBpZiAodXRpbC5zaXplRnJvbVNoYXBlKG91dHB1dFNoYXBlKSA9PT0gMCkge1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBjb25zdCB7c2xpY2VSYW5rLCBudW1VcGRhdGVzLCBzbGljZVNpemUsIHN0cmlkZXMsIG91dHB1dFNpemV9ID1cbiAgICAgIGJhY2tlbmRfdXRpbC5jYWxjdWxhdGVTaGFwZXMoc3BhcnNlVmFsdWVzLCBzcGFyc2VJbmRpY2VzLCBvdXRwdXRTaGFwZSk7XG5cbiAgY29uc3Qgc3BhcnNlSW5kaWNlc0lkID0gYmFja2VuZC5kYXRhSWRNYXAuZ2V0KHNwYXJzZUluZGljZXMuZGF0YUlkKS5pZDtcbiAgY29uc3Qgc3BhcnNlVmFsdWVzSWQgPSBiYWNrZW5kLmRhdGFJZE1hcC5nZXQoc3BhcnNlVmFsdWVzLmRhdGFJZCkuaWQ7XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZUlkID0gYmFja2VuZC5kYXRhSWRNYXAuZ2V0KGRlZmF1bHRWYWx1ZS5kYXRhSWQpLmlkO1xuXG4gIGNvbnN0IHN0cmlkZXNCeXRlcyA9IG5ldyBVaW50OEFycmF5KG5ldyBJbnQzMkFycmF5KHN0cmlkZXMpLmJ1ZmZlcik7XG5cbiAgY29uc3Qgb3V0SWQgPSBiYWNrZW5kLmRhdGFJZE1hcC5nZXQob3V0LmRhdGFJZCkuaWQ7XG5cbiAgd2FzbVNwYXJzZVRvRGVuc2UoXG4gICAgICBzcGFyc2VJbmRpY2VzSWQsIHNwYXJzZVZhbHVlc0lkLCBzcGFyc2VWYWx1ZXMuc2hhcGUubGVuZ3RoLFxuICAgICAgZGVmYXVsdFZhbHVlSWQsIENwcERUeXBlW2RlZmF1bHRWYWx1ZS5kdHlwZV0sIHNsaWNlUmFuaywgbnVtVXBkYXRlcyxcbiAgICAgIHNsaWNlU2l6ZSwgc3RyaWRlc0J5dGVzLCBvdXRwdXRTaXplLCBvdXRJZCk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGNvbnN0IHNwYXJzZVRvRGVuc2VDb25maWc6IEtlcm5lbENvbmZpZyA9IHtcbiAga2VybmVsTmFtZTogU3BhcnNlVG9EZW5zZSxcbiAgYmFja2VuZE5hbWU6ICd3YXNtJyxcbiAgc2V0dXBGdW5jOiBzZXR1cCxcbiAga2VybmVsRnVuYzogc3BhcnNlVG9EZW5zZSBhcyB1bmtub3duIGFzIEtlcm5lbEZ1bmNcbn07XG4iXX0=