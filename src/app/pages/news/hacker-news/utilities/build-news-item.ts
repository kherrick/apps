import { buildNextItem } from './build-html-next-item';
import { HackerNewsItem, UpdateQueue } from './state';

export const buildNewsItem = async (
  newsItem: HackerNewsItem,
  queue: UpdateQueue,
  shadowRoot: ShadowRoot,
) => {
  try {
    const { date, time, itemComments, itemTitle, itemLink } = newsItem;
    const section = await buildNextItem({
      document,
      dateTime: `${date}, ${time}`,
      itemComments,
      itemLink,
      itemTitle: itemTitle.replace(/\\/g, ''),
      fetchItemDetails: false,
    });

    // display loading indicator for section
    (section.querySelector('.points-container') as HTMLElement).innerHTML =
      'Points: <span class="points"><img style="height: 100%;" src="assets/images/loading.svg" /></span>';

    const id = section.getAttribute('id');
    if (!shadowRoot.getElementById(`${id}`)) {
      const latest = shadowRoot.getElementById('latest') as HTMLElement;
      latest.appendChild(section);

      queue.addItemById(`${id}`);
    }
  } catch (error) {
    // console.error(error);
  }
};
