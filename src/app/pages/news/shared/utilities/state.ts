import { addNewsItems } from './add-news-items';
import { buildArchiveIndex } from './build-archive-index';
import { getNextDateTime } from './date-time';

export interface NewsItem {
  date: string;
  itemComments: string;
  itemLink: string;
  itemTitle: string;
  time: string;
}

export interface NewsState {
  index: NewsItem[];
  currentTimeIndex: number;
  nextTimeIndex: number;
}

export const NewsWindow = globalThis as any & {
  newsState: NewsState;
};

export const getArchives = (shadowRoot: ShadowRoot, newsState: NewsState, queue: UpdateQueue, dataUrl: string) => {
  const handleIntersectingEntry = async (entry: IntersectionObserverEntry, queue: UpdateQueue) => {
    if (entry.isIntersecting) {
      await getIndex(-1, shadowRoot, dataUrl);

      addNewsItems(shadowRoot, newsState, queue);
    }
  };

  const archives = shadowRoot.getElementById('archives') as HTMLElement;
  const archivesObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const archivesObserverHandler = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(async (entry: IntersectionObserverEntry) => handleIntersectingEntry(entry, queue));
  };

  const archivesObserver = new IntersectionObserver(archivesObserverHandler, archivesObserverOptions);

  setTimeout(() => {
    archivesObserver.observe(archives);
  }, 250);

  let latestSectionsExpanded = true;
  const handleLatestHeaderClick = () => {
    latestSectionsExpanded = !latestSectionsExpanded;

    if (latestSectionsExpanded) {
      archivesObserver.observe(archives);
    } else {
      archivesObserver.disconnect();
    }

    for (let section of Array.from(shadowRoot.querySelectorAll('#latest > section'))) {
      (section as HTMLElement).style.display = latestSectionsExpanded ? 'block' : 'none';
    }
  };

  const latestHeader = shadowRoot.querySelector('#latest > h2') as HTMLElement;
  latestHeader.style.cursor = 'pointer';
  latestHeader.addEventListener('click', handleLatestHeaderClick);
};

export const getIndex = async (dayChange: number = 0, shadowRoot: ShadowRoot, baseUrl: string) => {
  const lastDateTime = (shadowRoot?.getElementById('latest') as HTMLElement)?.querySelector(
    'section:last-child > section > h4 > span'
  )?.textContent;

  const nextDateTime = getNextDateTime(lastDateTime ?? '', dayChange);
  let archiveIndex: NewsItem[] = [];

  try {
    archiveIndex = await buildArchiveIndex(nextDateTime, baseUrl);
  } catch (error) {
    // console.error(error)
  }

  const nextTimeIndex = archiveIndex.findIndex(({ time }: { time: string }) => time === nextDateTime?.slice(-8));
  const handleIndexUpdate = (index: NewsItem[], existingIndexValues: NewsItem[] = []) => {
    index.forEach((i: NewsItem) => {
      existingIndexValues.push(i);
    });

    return existingIndexValues;
  };

  NewsWindow.newsState = {
    ...NewsWindow.newsState,
    index: handleIndexUpdate(archiveIndex, NewsWindow.newsState.index),
    nextTimeIndex,
  };
};

export class UpdateQueue {
  #ids: string[] = [];
  #isUpdating = false;
  #shadowRoot: ShadowRoot;

  constructor(shadowRoot: ShadowRoot) {
    this.#shadowRoot = shadowRoot;
  }

  addItemById(id: string) {
    this.#ids.push(id);
  }

  async flush() {
    const id = this.#ids.shift();

    if (id) {
      this.#isUpdating = true;

      // await updateSectionById(id, this.#shadowRoot);
      await this.flush();
    } else {
      this.#isUpdating = false;

      if ('requestAnimationFrame' in globalThis) {
        requestAnimationFrame(async () => {
          if (!this.#isUpdating && this.#ids && this.#ids.length) {
            await this.flush();
          }
        });
      }
    }
  }
}
