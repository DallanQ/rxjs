import { InnerSubscriber } from '../InnerSubscriber';
import { subscribeTo } from './subscribeTo';
export function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) { destination = new InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
    if (destination.closed) {
        return;
    }
    return subscribeTo(result)(destination);
}
//# sourceMappingURL=subscribeToResult.js.map