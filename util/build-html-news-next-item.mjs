import { buildDescendants } from "./build-html-news-descendants.mjs";

export const buildNextItem = async ({
  document,
  dateTime,
  itemComments,
  itemLink,
  itemTitle,
  handleText = null,
  fetchItemDetails = true,
  // fetchItemDetails = false,
}) => {
  const itemId = btoa(itemComments);

  const section = document.createElement("section");
  section.setAttribute("id", itemId);

  const itemAnchor = document.createElement("a");
  itemAnchor.textContent = itemTitle.replace(/\0/g, "");
  itemAnchor.setAttribute("class", "item");
  itemAnchor.setAttribute("href", itemLink);

  const header = document.createElement("h3");
  header.appendChild(itemAnchor);
  section.appendChild(header);

  const dateSpan = document.createElement("span");
  const [date, time] = dateTime.split(",");
  dateSpan.textContent = `${date.replace("24:", "00:")} @ ${time}`;

  try {
    const itemSection = document.createElement("section");
    const itemHeader = document.createElement("h4");
    itemHeader.appendChild(dateSpan);

    // handle comments
    const comments = buildDescendants(
      document,
      itemComments
    );

    itemHeader.appendChild(comments);
    itemSection.appendChild(itemHeader);

    section.appendChild(itemSection);
  } catch (error) {}

  return section;
};
