export const initChatOutputObserver = (
  chatOutput: HTMLElement,
): MutationObserver => {
  // keep chat scrolled to bottom
  return new MutationObserver(() => {
    requestAnimationFrame(() => {
      chatOutput.scrollTo(0, chatOutput.scrollHeight);
    });
  });
};

