import { buildNewsItem } from './build-news-item';
import { NewsState, NewsWindow, UpdateQueue } from './state';

export const addNewsItems = async (
  shadowRoot: ShadowRoot,
  newsState: NewsState,
  queue: UpdateQueue,
) => {
  const items = Object.values(newsState.index);

  let currentTimeIndex = newsState.currentTimeIndex ?? -1 + 1;

  for (let item of items) {
    if (currentTimeIndex < newsState.index.length) {
      buildNewsItem(items[currentTimeIndex], queue, shadowRoot);

      currentTimeIndex = currentTimeIndex + 1;
    }
  }

  NewsWindow.newsState.currentTimeIndex = currentTimeIndex;

  queue.flush();
};
