import { buildDescendants } from "./build-html-descendants";
import { parseHtml } from "./parse-html";

export const buildNextItem = async (item: {
  document: Document;
  dateTime: string;
  itemComments: string;
  itemLink: string;
  itemTitle: string;
  handleText?: Function | null;
  fetchItemDetails: string;
}) => {
  const {
    document,
    dateTime,
    itemComments,
    itemLink,
    itemTitle,
    handleText = null,
    fetchItemDetails = '',
  } = item;

  const itemId = encodeURIComponent(itemComments);

  const section = document.createElement('section');
  section.setAttribute('id', `${itemId}`);

  const itemAnchor = document.createElement('a');
  itemAnchor.textContent = parseHtml(itemTitle.replace(/\0/g, ''));
  itemAnchor.setAttribute('class', 'item');
  itemAnchor.setAttribute('href', itemLink);

  const header = document.createElement('h3');
  header.appendChild(itemAnchor);
  section.appendChild(header);

  const dateSpan = document.createElement('span');
  const [date, time] = dateTime.split(',');
  dateSpan.textContent = `${date.replace('24:', '00:')} @ ${time}`;

  try {
    const points = document.createElement('span');
    points.setAttribute('class', 'points');
    points.textContent = '0';

    const pointsSpan = document.createElement('span');
    pointsSpan.setAttribute('class', 'points-container');
    pointsSpan.textContent = 'Points: ';
    pointsSpan.appendChild(points);

    const itemSection = document.createElement('section');
    const itemHeader = document.createElement('h4');
    itemHeader.appendChild(dateSpan);
    itemHeader.appendChild(pointsSpan);

    itemSection.appendChild(itemHeader);

    if (fetchItemDetails) {
      const { descendants, score, type, text } = await (
        await fetch(fetchItemDetails)
      ).json();

      if (score) {
        points.textContent = score;
      }

      // handle comments
      if (
        typeof descendants === 'number' &&
        (type === 'story' || type === 'poll')
      ) {
        const descendantsSpan = buildDescendants(
          document,
          `${descendants}`,
          itemComments
        );

        itemHeader.appendChild(descendantsSpan);
      }

      if (handleText) {
        handleText(text, itemSection);
      }
    } else {
      // handle comments
      const comments = buildDescendants(
        document,
        '',
        itemComments
      );

      itemHeader.appendChild(comments);
      itemSection.appendChild(itemHeader);
    }

    section.appendChild(itemSection);
  } catch (error) {
    // console.error(error);
  }

  return section;
};
