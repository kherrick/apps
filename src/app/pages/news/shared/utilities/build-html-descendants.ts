export const buildDescendants = (
  document: Document,
  descendants = '',
  itemComments = ''
) => {
  const descendantsLink = document.createElement('a');
  descendantsLink.setAttribute('href', itemComments);
  descendantsLink.textContent = 'Comments';

  const descendantsSpan = document.createElement('span');
  descendantsSpan.setAttribute('class', 'descendants-container');
  descendantsSpan.appendChild(descendantsLink);

  if (descendants) {
    const descendantsCountText = document.createElement('span');
    descendantsCountText.setAttribute('class', 'descendants');
    descendantsCountText.textContent = `: ${descendants}`;

    descendantsSpan.appendChild(descendantsCountText);
  }

  return descendantsSpan;
};
