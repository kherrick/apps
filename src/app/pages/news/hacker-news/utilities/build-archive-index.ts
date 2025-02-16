import { HackerNewsItem } from './state';

export const buildArchiveIndex = async (
  lastDateTime: string,
): Promise<HackerNewsItem[]> => {
  const nextDate = lastDateTime?.slice(0, 10);
  const nextYear = nextDate?.slice(0, 4);

  return (
    await (
      await fetch(
        `https://raw.githubusercontent.com/kherrick/hacker-news/main/archives/${nextYear}/${nextDate}/index.md`,
      )
    ).text()
  )
    .split('\n')
    .filter((line) => line.match(new RegExp('^\\* \\[')))
    .map((line) => {
      const segment = line.replace('* ', '').split('](');
      const pubDate = segment[0].slice(1);

      const itemComments = segment[1].split(') - [')[0];
      const itemTitle = segment[1].split(') - [')[1];
      const itemLink = segment[2].slice(0, -1);
      const date = pubDate.slice(0, 10);
      const time = pubDate.slice(-8);

      return {
        date,
        itemComments,
        itemLink,
        itemTitle,
        time,
      };
    });
};
