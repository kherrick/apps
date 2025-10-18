import { getNextDateTime } from '../../../../../app/pages/news/shared/utilities/date-time';

import { addNewsItems } from './add-news-items';
import { buildArchiveIndex } from './build-archive-index';
import { buildDescendants } from './build-html-descendants';

export interface HackerNewsItem {
  date: string;
  itemComments: string;
  itemLink: string;
  itemTitle: string;
  time: string;
}

export interface HackerNewsState {
  index: HackerNewsItem[];
  currentTimeIndex: number;
  nextTimeIndex: number;
}

export const hackerNewsWindow = globalThis as any & {
  hackerNewsState: HackerNewsState;
};

export const getArchives = (
  shadowRoot: ShadowRoot,
  hackerNewsState: HackerNewsState,
  queue: UpdateQueue,
) => {
  const handleIntersectingEntry = async (
    entry: IntersectionObserverEntry,
    queue: UpdateQueue,
  ) => {
    if (entry.isIntersecting) {
      await getIndex(-1, shadowRoot);

      addNewsItems(shadowRoot, hackerNewsState, queue);
    }
  };

  const archives = shadowRoot.getElementById('archives') as HTMLElement;
  const archivesObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const archivesObserverHandler = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(async (entry: IntersectionObserverEntry) =>
      handleIntersectingEntry(entry, queue),
    );
  };

  const archivesObserver = new IntersectionObserver(
    archivesObserverHandler,
    archivesObserverOptions,
  );

  if (archives) {
    setTimeout(() => {
      archivesObserver.observe(archives);
    }, 250);
  }

  let latestSectionsExpanded = true;
  const handleLatestHeaderClick = () => {
    latestSectionsExpanded = !latestSectionsExpanded;

    if (latestSectionsExpanded) {
      archivesObserver.observe(archives);
    } else {
      archivesObserver.disconnect();
    }

    for (let section of Array.from(
      shadowRoot.querySelectorAll('#latest > section'),
    )) {
      (section as HTMLElement).style.display = latestSectionsExpanded
        ? 'block'
        : 'none';
    }
  };

  const latestHeader = shadowRoot.querySelector('#latest > h2') as HTMLElement;

  if (latestHeader) {
    latestHeader.style.cursor = 'pointer';
    latestHeader.addEventListener('click', handleLatestHeaderClick);
  }
};

export const getIndex = async (
  dayChange: number = 0,
  shadowRoot: ShadowRoot,
) => {
  const lastDateTime = (
    shadowRoot?.getElementById('latest') as HTMLElement
  )?.querySelector('section:last-child > section > h4 > span')?.textContent;

  const nextDateTime = getNextDateTime(lastDateTime ?? '', dayChange);
  let archiveIndex: HackerNewsItem[] = [];

  try {
    archiveIndex = await buildArchiveIndex(nextDateTime);
  } catch (error) {
    // console.error(error)
  }

  const nextTimeIndex = archiveIndex.findIndex(
    ({ time }: { time: string }) => time === nextDateTime?.slice(-8),
  );
  const handleIndexUpdate = (
    index: HackerNewsItem[],
    existingIndexValues: HackerNewsItem[] = [],
  ) => {
    index.forEach((i: HackerNewsItem) => {
      existingIndexValues.push(i);
    });

    return existingIndexValues;
  };

  hackerNewsWindow.hackerNewsState = {
    ...hackerNewsWindow.hackerNewsState,
    index: handleIndexUpdate(
      archiveIndex,
      hackerNewsWindow.hackerNewsState.index,
    ),
    nextTimeIndex,
  };
};

export const updateSectionById = (
  id: string,
  shadowRoot: ShadowRoot,
): Promise<JSON | void> =>
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (result) =>
      result.json().then(({ descendants, id, score, text, type }) => {
        const currentItem = shadowRoot.getElementById(id) as HTMLElement;

        if (score) {
          const points = currentItem.querySelector('.points') as HTMLElement;
          points.textContent = score;
        }

        if (descendants && (type === 'poll' || type === 'story')) {
          const currentDescendants = currentItem.querySelector('.descendants');

          if (currentDescendants) {
            currentDescendants.textContent = `: ${descendants}`;
          } else {
            const comments = buildDescendants(
              document,
              descendants,
              `https://news.ycombinator.com/item?id=${id}`,
            );

            const heading = currentItem.querySelector('h4') as HTMLElement;
            heading.appendChild(comments);
          }
        }

        if (text) {
          const currentText = currentItem.querySelector('.text');

          if (currentText) {
            currentText.innerHTML = text.replace(/\0/g, '');
          } else {
            const content = document.createElement('div');
            content.innerHTML = text.replace(/\0/g, '');
            content.setAttribute('class', 'text');

            currentItem.appendChild(content);
          }
        }
      }),
  );

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

      await updateSectionById(id, this.#shadowRoot);
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
