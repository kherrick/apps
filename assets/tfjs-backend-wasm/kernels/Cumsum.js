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
import { backend_util, Cumsum, util } from '@tensorflow/tfjs-core';
import { CppDType } from './types';
import { transpose } from './Transpose';
let wasmCumsum;
function setup(backend) {
    wasmCumsum = backend.wasm.cwrap(Cumsum, null /* void */, [
        'number',
        'number',
        'number',
        'number',
        'number',
        'number' // dtype
    ]);
}
export function cumsum(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    const { axis, exclusive, reverse } = attrs;
    const xRank = x.shape.length;
    util.assert(x.dtype === 'float32' || x.dtype === 'int32', () => `cumsum does not support ${x.dtype} tensors in the WASM backend`);
    // permute required axis to inner most axis
    const permutation = backend_util.getAxesPermutation([axis], xRank);
    let permutedX = x;
    if (permutation !== null) {
        permutedX = transpose({ inputs: { x }, attrs: { perm: permutation }, backend });
    }
    const permutedAxis = backend_util.getInnerMostAxes(1, xRank)[0];
    backend_util.assertAxesAreInnerMostDims('cumsum', [permutedAxis], xRank);
    const permutedOut = backend.makeOutput(permutedX.shape, permutedX.dtype);
    const finalDim = permutedX.shape[permutedAxis];
    const permutedXId = backend.dataIdMap.get(permutedX.dataId).id;
    const permutedOutId = backend.dataIdMap.get(permutedOut.dataId).id;
    wasmCumsum(permutedXId, exclusive ? 1 : 0, reverse ? 1 : 0, finalDim, permutedOutId, CppDType[x.dtype]);
    // transpose data back if permuted
    let out = permutedOut;
    if (permutation !== null) {
        const undoPermutation = backend_util.getUndoAxesPermutation(permutation);
        out = transpose({ inputs: { x: permutedOut }, attrs: { perm: undoPermutation }, backend });
        backend.disposeData(permutedX.dataId);
        backend.disposeData(permutedOut.dataId);
    }
    return out;
}
export const cumsumConfig = {
    kernelName: Cumsum,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: cumsum
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Vtc3VtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLXdhc20vc3JjL2tlcm5lbHMvQ3Vtc3VtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQTRCLE1BQU0sRUFBeUMsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFJbEksT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVqQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXRDLElBQUksVUFDc0UsQ0FBQztBQUUzRSxTQUFTLEtBQUssQ0FBQyxPQUFvQjtJQUNqQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDdkQsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRLENBQUUsUUFBUTtLQUNuQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsSUFBc0U7SUFFdEUsTUFBTSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLE1BQU0sRUFBQyxDQUFDLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFDbkIsTUFBTSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQ3RELEdBQUcsRUFBRSxDQUFDLDJCQUEyQixDQUFDLENBQUMsS0FBSyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzFFLDJDQUEyQztJQUMzQyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1FBQ3hCLFNBQVMsR0FBRyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztLQUMzRTtJQUNELE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsWUFBWSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXpFLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekUsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9ELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbkUsVUFBVSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUN6RCxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTdDLGtDQUFrQztJQUNsQyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUM7SUFDdEIsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1FBQ3hCLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RSxHQUFHLEdBQUcsU0FBUyxDQUNiLEVBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBQyxFQUFFLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFpQjtJQUN4QyxVQUFVLEVBQUUsTUFBTTtJQUNsQixXQUFXLEVBQUUsTUFBTTtJQUNuQixTQUFTLEVBQUUsS0FBSztJQUNoQixVQUFVLEVBQUUsTUFBK0I7Q0FDNUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtiYWNrZW5kX3V0aWwsIEtlcm5lbENvbmZpZywgS2VybmVsRnVuYywgQ3Vtc3VtLCBDdW1zdW1BdHRycywgQ3Vtc3VtSW5wdXRzLCBUZW5zb3JJbmZvLCB1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge0JhY2tlbmRXYXNtfSBmcm9tICcuLi9iYWNrZW5kX3dhc20nO1xuXG5pbXBvcnQge0NwcERUeXBlfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHt0cmFuc3Bvc2V9IGZyb20gJy4vVHJhbnNwb3NlJztcblxubGV0IHdhc21DdW1zdW06ICh4SWQ6IG51bWJlciwgZXhjbHVzaXZlOiBudW1iZXIsIHJldmVyc2U6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgZmluYWxEaW06IG51bWJlciwgb3V0SWQ6IG51bWJlciwgZHR5cGU6IENwcERUeXBlKSA9PiB2b2lkO1xuXG5mdW5jdGlvbiBzZXR1cChiYWNrZW5kOiBCYWNrZW5kV2FzbSkge1xuICB3YXNtQ3Vtc3VtID0gYmFja2VuZC53YXNtLmN3cmFwKEN1bXN1bSwgbnVsbCAvKiB2b2lkICovLCBbXG4gICAgJ251bWJlcicsIC8vIHhfaWRcbiAgICAnbnVtYmVyJywgLy8gZXhjbHVzaXZlXG4gICAgJ251bWJlcicsIC8vIHJldmVyc2VcbiAgICAnbnVtYmVyJywgLy8gZmluYWxfZGltXG4gICAgJ251bWJlcicsIC8vIG91dF9pZFxuICAgICdudW1iZXInICAvLyBkdHlwZVxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1bXN1bShcbiAgYXJnczoge2lucHV0czogQ3Vtc3VtSW5wdXRzLCBiYWNrZW5kOiBCYWNrZW5kV2FzbSwgYXR0cnM6IEN1bXN1bUF0dHJzfSk6XG5UZW5zb3JJbmZvIHtcbiAgY29uc3Qge2lucHV0cywgYmFja2VuZCwgYXR0cnN9ID0gYXJncztcbiAgY29uc3Qge3h9ID0gaW5wdXRzO1xuICBjb25zdCB7YXhpcywgZXhjbHVzaXZlLCByZXZlcnNlfSA9IGF0dHJzO1xuICBjb25zdCB4UmFuayA9IHguc2hhcGUubGVuZ3RoO1xuXG4gIHV0aWwuYXNzZXJ0KHguZHR5cGUgPT09ICdmbG9hdDMyJyB8fCB4LmR0eXBlID09PSAnaW50MzInLFxuICAgICgpID0+IGBjdW1zdW0gZG9lcyBub3Qgc3VwcG9ydCAke3guZHR5cGV9IHRlbnNvcnMgaW4gdGhlIFdBU00gYmFja2VuZGApO1xuICAvLyBwZXJtdXRlIHJlcXVpcmVkIGF4aXMgdG8gaW5uZXIgbW9zdCBheGlzXG4gIGNvbnN0IHBlcm11dGF0aW9uID0gYmFja2VuZF91dGlsLmdldEF4ZXNQZXJtdXRhdGlvbihbYXhpc10sIHhSYW5rKTtcbiAgbGV0IHBlcm11dGVkWCA9IHg7XG4gIGlmIChwZXJtdXRhdGlvbiAhPT0gbnVsbCkge1xuICAgIHBlcm11dGVkWCA9IHRyYW5zcG9zZSh7aW5wdXRzOiB7eH0sIGF0dHJzOiB7cGVybTogcGVybXV0YXRpb259LCBiYWNrZW5kfSk7XG4gIH1cbiAgY29uc3QgcGVybXV0ZWRBeGlzID0gYmFja2VuZF91dGlsLmdldElubmVyTW9zdEF4ZXMoMSwgeFJhbmspWzBdO1xuICBiYWNrZW5kX3V0aWwuYXNzZXJ0QXhlc0FyZUlubmVyTW9zdERpbXMoJ2N1bXN1bScsIFtwZXJtdXRlZEF4aXNdLCB4UmFuayk7XG5cbiAgY29uc3QgcGVybXV0ZWRPdXQgPSBiYWNrZW5kLm1ha2VPdXRwdXQocGVybXV0ZWRYLnNoYXBlLCBwZXJtdXRlZFguZHR5cGUpO1xuICBjb25zdCBmaW5hbERpbSA9IHBlcm11dGVkWC5zaGFwZVtwZXJtdXRlZEF4aXNdO1xuICBjb25zdCBwZXJtdXRlZFhJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChwZXJtdXRlZFguZGF0YUlkKS5pZDtcbiAgY29uc3QgcGVybXV0ZWRPdXRJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChwZXJtdXRlZE91dC5kYXRhSWQpLmlkO1xuICB3YXNtQ3Vtc3VtKHBlcm11dGVkWElkLCBleGNsdXNpdmUgPyAxIDogMCwgcmV2ZXJzZSA/IDEgOiAwLCBmaW5hbERpbSxcbiAgICAgICAgICAgICBwZXJtdXRlZE91dElkLCBDcHBEVHlwZVt4LmR0eXBlXSk7XG5cbiAgLy8gdHJhbnNwb3NlIGRhdGEgYmFjayBpZiBwZXJtdXRlZFxuICBsZXQgb3V0ID0gcGVybXV0ZWRPdXQ7XG4gIGlmIChwZXJtdXRhdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHVuZG9QZXJtdXRhdGlvbiA9IGJhY2tlbmRfdXRpbC5nZXRVbmRvQXhlc1Blcm11dGF0aW9uKHBlcm11dGF0aW9uKTtcbiAgICBvdXQgPSB0cmFuc3Bvc2UoXG4gICAgICB7aW5wdXRzOiB7eDogcGVybXV0ZWRPdXR9LCBhdHRyczoge3Blcm06IHVuZG9QZXJtdXRhdGlvbn0sIGJhY2tlbmR9KTtcbiAgICBiYWNrZW5kLmRpc3Bvc2VEYXRhKHBlcm11dGVkWC5kYXRhSWQpO1xuICAgIGJhY2tlbmQuZGlzcG9zZURhdGEocGVybXV0ZWRPdXQuZGF0YUlkKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgY29uc3QgY3Vtc3VtQ29uZmlnOiBLZXJuZWxDb25maWcgPSB7XG4gIGtlcm5lbE5hbWU6IEN1bXN1bSxcbiAgYmFja2VuZE5hbWU6ICd3YXNtJyxcbiAgc2V0dXBGdW5jOiBzZXR1cCxcbiAga2VybmVsRnVuYzogY3Vtc3VtIGFzIHVua25vd24gYXMgS2VybmVsRnVuY1xufTtcbiJdfQ==