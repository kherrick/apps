/**
 * @license
 * Copyright 2023 Google LLC.
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
import { backend_util, Dilation2D } from '@tensorflow/tfjs-core';
import { CppDType } from './types';
let wasmDilation2D;
function setup(backend) {
    wasmDilation2D = backend.wasm.cwrap(Dilation2D, null, [
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number',
        'number', // padLeft
    ]);
}
export function dilation2D(args) {
    const { inputs, backend, attrs } = args;
    const { x, filter } = inputs;
    const { strides, pad, dilations } = attrs;
    if (x.dtype !== filter.dtype) {
        throw new Error(`Dilation2D error: x must have the same dtype as filter. Got ${x.dtype} and ${filter.dtype}`);
    }
    const dilationInfo = backend_util.computeDilation2DInfo(x.shape, filter.shape, strides, pad, 
    /*dataFormat=*/ 'NHWC', dilations);
    const out = backend.makeOutput(dilationInfo.outShape, x.dtype);
    wasmDilation2D(backend.dataIdMap.get(x.dataId).id, backend.dataIdMap.get(filter.dataId).id, backend.dataIdMap.get(out.dataId).id, CppDType[x.dtype], dilationInfo.batchSize, 
    /*depth=*/ dilationInfo.inChannels, dilationInfo.inHeight, dilationInfo.inWidth, dilationInfo.outHeight, dilationInfo.outWidth, dilationInfo.strideHeight, dilationInfo.strideWidth, dilationInfo.dilationHeight, dilationInfo.dilationWidth, dilationInfo.filterHeight, dilationInfo.filterWidth, dilationInfo.padInfo.top, dilationInfo.padInfo.left);
    return out;
}
export const dilation2DConfig = {
    kernelName: Dilation2D,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: dilation2D
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlsYXRpb24yRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC13YXNtL3NyYy9rZXJuZWxzL0RpbGF0aW9uMkQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxVQUFVLEVBQTBFLE1BQU0sdUJBQXVCLENBQUM7QUFHeEksT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVqQyxJQUFJLGNBSzZELENBQUM7QUFFbEUsU0FBUyxLQUFLLENBQUMsT0FBb0I7SUFDakMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUU7UUFDcEQsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRLEVBQUcsVUFBVTtLQUN0QixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUkxQjtJQUNDLE1BQU0sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQztJQUN0QyxNQUFNLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxHQUFHLE1BQU0sQ0FBQztJQUMzQixNQUFNLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFFeEMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FDWCwrREFDSSxDQUFDLENBQUMsS0FBSyxRQUFRLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLHFCQUFxQixDQUNuRCxDQUFDLENBQUMsS0FBeUMsRUFDM0MsTUFBTSxDQUFDLEtBQWlDLEVBQUUsT0FBTyxFQUFFLEdBQUc7SUFDdEQsZUFBZSxDQUFBLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV0QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9ELGNBQWMsQ0FDVixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUNsQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUNwQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUNqQixZQUFZLENBQUMsU0FBUztJQUN0QixVQUFVLENBQUEsWUFBWSxDQUFDLFVBQVUsRUFDakMsWUFBWSxDQUFDLFFBQVEsRUFDckIsWUFBWSxDQUFDLE9BQU8sRUFDcEIsWUFBWSxDQUFDLFNBQVMsRUFDdEIsWUFBWSxDQUFDLFFBQVEsRUFDckIsWUFBWSxDQUFDLFlBQVksRUFDekIsWUFBWSxDQUFDLFdBQVcsRUFDeEIsWUFBWSxDQUFDLGNBQWMsRUFDM0IsWUFBWSxDQUFDLGFBQWEsRUFDMUIsWUFBWSxDQUFDLFlBQVksRUFDekIsWUFBWSxDQUFDLFdBQVcsRUFDeEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QixDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWlCO0lBQzVDLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxVQUFtQztDQUNoRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQy5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2JhY2tlbmRfdXRpbCwgRGlsYXRpb24yRCwgRGlsYXRpb24yREF0dHJzLCBEaWxhdGlvbjJESW5wdXRzLCBLZXJuZWxDb25maWcsIEtlcm5lbEZ1bmMsIFRlbnNvckluZm99IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7QmFja2VuZFdhc219IGZyb20gJy4uL2JhY2tlbmRfd2FzbSc7XG5pbXBvcnQge0NwcERUeXBlfSBmcm9tICcuL3R5cGVzJztcblxubGV0IHdhc21EaWxhdGlvbjJEOiAoXG4gICAgeElkOiBudW1iZXIsIGZpbHRlcklkOiBudW1iZXIsIG91dElkOiBudW1iZXIsIGR0eXBlOiBudW1iZXIsIGJhdGNoOiBudW1iZXIsXG4gICAgZGVwdGg6IG51bWJlciwgaW5IZWlnaHQ6IG51bWJlciwgaW5XaWR0aDogbnVtYmVyLCBvdXRIZWlnaHQ6IG51bWJlcixcbiAgICBvdXRXaWR0aDogbnVtYmVyLCBzdHJpZGVIZWlnaHQ6IG51bWJlciwgc3RyaWRlV2lkdGg6IG51bWJlcixcbiAgICBkaWxhdGlvbkhlaWdodDogbnVtYmVyLCBkaWxhdGlvbldpZHRoOiBudW1iZXIsIGZpbHRlckhlaWdodDogbnVtYmVyLFxuICAgIGZpbHRlcldpZHRoOiBudW1iZXIsIHBhZFRvcDogbnVtYmVyLCBwYWRMZWZ0OiBudW1iZXIpID0+IHZvaWQ7XG5cbmZ1bmN0aW9uIHNldHVwKGJhY2tlbmQ6IEJhY2tlbmRXYXNtKSB7XG4gIHdhc21EaWxhdGlvbjJEID0gYmFja2VuZC53YXNtLmN3cmFwKERpbGF0aW9uMkQsIG51bGwsIFtcbiAgICAnbnVtYmVyJywgIC8vIHhJZFxuICAgICdudW1iZXInLCAgLy8gZmlsdGVySWRcbiAgICAnbnVtYmVyJywgIC8vIG91dElkXG4gICAgJ251bWJlcicsICAvLyBkdHlwZVxuICAgICdudW1iZXInLCAgLy8gYmF0Y2hcbiAgICAnbnVtYmVyJywgIC8vIGRlcHRoXG4gICAgJ251bWJlcicsICAvLyBpbkhlaWdodFxuICAgICdudW1iZXInLCAgLy8gaW5XaWR0aFxuICAgICdudW1iZXInLCAgLy8gb3V0SGVpZ2h0XG4gICAgJ251bWJlcicsICAvLyBvdXRXaWR0aFxuICAgICdudW1iZXInLCAgLy8gc3RyaWRlSGVpZ2h0XG4gICAgJ251bWJlcicsICAvLyBzdHJpZGVXaWR0aFxuICAgICdudW1iZXInLCAgLy8gZGlsYXRpb25IZWlnaHRcbiAgICAnbnVtYmVyJywgIC8vIGRpbGF0aW9uV2lkdGhcbiAgICAnbnVtYmVyJywgIC8vIGZpbHRlckhlaWdodFxuICAgICdudW1iZXInLCAgLy8gZmlsdGVyV2lkdGhcbiAgICAnbnVtYmVyJywgIC8vIHBhZFRvcFxuICAgICdudW1iZXInLCAgLy8gcGFkTGVmdFxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpbGF0aW9uMkQoYXJnczoge1xuICBpbnB1dHM6IERpbGF0aW9uMkRJbnB1dHMsXG4gIGF0dHJzOiBEaWxhdGlvbjJEQXR0cnMsXG4gIGJhY2tlbmQ6IEJhY2tlbmRXYXNtLFxufSk6IFRlbnNvckluZm8ge1xuICBjb25zdCB7aW5wdXRzLCBiYWNrZW5kLCBhdHRyc30gPSBhcmdzO1xuICBjb25zdCB7eCwgZmlsdGVyfSA9IGlucHV0cztcbiAgY29uc3Qge3N0cmlkZXMsIHBhZCwgZGlsYXRpb25zfSA9IGF0dHJzO1xuXG4gIGlmICh4LmR0eXBlICE9PSBmaWx0ZXIuZHR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBEaWxhdGlvbjJEIGVycm9yOiB4IG11c3QgaGF2ZSB0aGUgc2FtZSBkdHlwZSBhcyBmaWx0ZXIuIEdvdCAke1xuICAgICAgICAgICAgeC5kdHlwZX0gYW5kICR7ZmlsdGVyLmR0eXBlfWApO1xuICB9XG5cbiAgY29uc3QgZGlsYXRpb25JbmZvID0gYmFja2VuZF91dGlsLmNvbXB1dGVEaWxhdGlvbjJESW5mbyhcbiAgICAgIHguc2hhcGUgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICBmaWx0ZXIuc2hhcGUgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdLCBzdHJpZGVzLCBwYWQsXG4gICAgICAvKmRhdGFGb3JtYXQ9Ki8nTkhXQycsIGRpbGF0aW9ucyk7XG5cbiAgY29uc3Qgb3V0ID0gYmFja2VuZC5tYWtlT3V0cHV0KGRpbGF0aW9uSW5mby5vdXRTaGFwZSwgeC5kdHlwZSk7XG5cbiAgd2FzbURpbGF0aW9uMkQoXG4gICAgICBiYWNrZW5kLmRhdGFJZE1hcC5nZXQoeC5kYXRhSWQpLmlkLFxuICAgICAgYmFja2VuZC5kYXRhSWRNYXAuZ2V0KGZpbHRlci5kYXRhSWQpLmlkLFxuICAgICAgYmFja2VuZC5kYXRhSWRNYXAuZ2V0KG91dC5kYXRhSWQpLmlkLFxuICAgICAgQ3BwRFR5cGVbeC5kdHlwZV0sXG4gICAgICBkaWxhdGlvbkluZm8uYmF0Y2hTaXplLFxuICAgICAgLypkZXB0aD0qL2RpbGF0aW9uSW5mby5pbkNoYW5uZWxzLFxuICAgICAgZGlsYXRpb25JbmZvLmluSGVpZ2h0LFxuICAgICAgZGlsYXRpb25JbmZvLmluV2lkdGgsXG4gICAgICBkaWxhdGlvbkluZm8ub3V0SGVpZ2h0LFxuICAgICAgZGlsYXRpb25JbmZvLm91dFdpZHRoLFxuICAgICAgZGlsYXRpb25JbmZvLnN0cmlkZUhlaWdodCxcbiAgICAgIGRpbGF0aW9uSW5mby5zdHJpZGVXaWR0aCxcbiAgICAgIGRpbGF0aW9uSW5mby5kaWxhdGlvbkhlaWdodCxcbiAgICAgIGRpbGF0aW9uSW5mby5kaWxhdGlvbldpZHRoLFxuICAgICAgZGlsYXRpb25JbmZvLmZpbHRlckhlaWdodCxcbiAgICAgIGRpbGF0aW9uSW5mby5maWx0ZXJXaWR0aCxcbiAgICAgIGRpbGF0aW9uSW5mby5wYWRJbmZvLnRvcCxcbiAgICAgIGRpbGF0aW9uSW5mby5wYWRJbmZvLmxlZnQsXG4gICk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBjb25zdCBkaWxhdGlvbjJEQ29uZmlnOiBLZXJuZWxDb25maWcgPSB7XG4gIGtlcm5lbE5hbWU6IERpbGF0aW9uMkQsXG4gIGJhY2tlbmROYW1lOiAnd2FzbScsXG4gIHNldHVwRnVuYzogc2V0dXAsXG4gIGtlcm5lbEZ1bmM6IGRpbGF0aW9uMkQgYXMgdW5rbm93biBhcyBLZXJuZWxGdW5jXG59O1xuIl19