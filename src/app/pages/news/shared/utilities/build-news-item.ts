import { buildNextItem } from './build-html-next-item';
import { NewsItem, UpdateQueue } from './state';

export const buildNewsItem = async (
  newsItem: NewsItem,
  queue: UpdateQueue,
  shadowRoot: ShadowRoot
) => {
  try {
    const { date, time, itemComments, itemTitle, itemLink } = newsItem;
    const section = await buildNextItem({
      document,
      dateTime: `${date}, ${time}`,
      itemComments,
      itemLink,
      itemTitle: itemTitle.replace(/\\/g, ''),
      fetchItemDetails: '',
    });

    // // display loading indicator for section
    // (section.querySelector('.points-container') as HTMLElement).innerHTML =
    //   'Points: <span class="points"><img style="height: 100%;" src="assets/images/loading.svg" /></span>';

    // remove loading indicator for section
    section.querySelector(".points-container")?.remove();

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
