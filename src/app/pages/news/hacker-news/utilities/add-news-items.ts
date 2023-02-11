import { buildNewsItem } from './build-news-item';
import { HackerNewsState, hackerNewsWindow, UpdateQueue } from './state';

export const addNewsItems = async (
  shadowRoot: ShadowRoot,
  hackerNewsState: HackerNewsState,
  queue: UpdateQueue
) => {
  const items = Object.values(hackerNewsState.index);

  let currentTimeIndex = hackerNewsState.currentTimeIndex ?? -1 + 1;

  for (let item of items) {
    if (currentTimeIndex < hackerNewsState.index.length) {
      buildNewsItem(items[currentTimeIndex], queue, shadowRoot);

      currentTimeIndex = currentTimeIndex + 1;
    }
  }

  hackerNewsWindow.hackerNewsState.currentTimeIndex = currentTimeIndex;

  queue.flush();
};
