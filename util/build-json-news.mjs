#!/usr/bin/env node

const [, , newsProject] = process.argv;

if (!newsProject) {
  console.error("the first argument must be the news project that contains the appropriate markdown file.");

  process.exit(1);
}

const pad = (n) => (n < 10 ? "0" + n : n);

const getYear = (dateTime) => Number(dateTime.slice(0, 4));

const getMonth = (dateTime) => Number(dateTime.slice(5, 7));

const getDay = (dateTime) => Number(dateTime.slice(8, 10));

const getDate = (dateTime) =>
  (dateTime ? new Date(dateTime.slice(0, 10)) : new Date())
    .toISOString()
    .split("T")[0];

const getDateString = (currentDate = "", dayChange = 0) => {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + dayChange);
  const dateString = date.toISOString();

  return `${getYear(dateString)}-${pad(getMonth(dateString))}-${pad(
    getDay(dateString)
  )} @ 23:59:59`;
};

const getNextDateTime = (currentDate = "", dayChange = 0) =>
  getDateString(getDate(currentDate), dayChange);

const buildArchiveIndex = async (lastDateTime) => {
  const nextDate = lastDateTime?.slice(0, 10);
  const nextYear = nextDate?.slice(0, 4);

  return (
    await (
      await fetch(
        `https://raw.githubusercontent.com/kherrick/${newsProject}/main/archives/${nextYear}/${nextDate}/index.md`
      )
    ).text()
  )
    .split("\n")
    .filter((line) => line.match(new RegExp("^\\* \\[")))
    .map((line) => {
      const segment = line.replace("* ", "").split("](");
      const pubDate = segment[0].slice(1);

      const itemComments = segment[1].split(") - [")[0];
      const itemTitle = segment[1].split(") - [")[1];
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

const nextTimeIndex = (archiveIndex, nextDateTime) =>
  archiveIndex.findIndex(({ time }) => time === nextDateTime?.slice(-8));

const handleIndexUpdate = (index, existingIndexValues = []) => {
  index.forEach((i) => {
    existingIndexValues.push(i);
  });

  return existingIndexValues;
};

const getIndex = async (dayChange = 0, hackerNewsState) => {
  const nextDateTime = getNextDateTime("", dayChange);
  let archiveIndex = [];

  try {
    archiveIndex = await buildArchiveIndex(nextDateTime);
  } catch (error) {
    console.error(error);
  }

  return {
    ...hackerNewsState,
    index: handleIndexUpdate(archiveIndex, hackerNewsState.index),
    nextTimeIndex: nextTimeIndex(archiveIndex, nextDateTime),
  };
};

console.log(
  JSON.stringify(await getIndex(0, {
    index: [],
    currentTimeIndex: -1,
    nextTimeIndex: -1,
  }))
);
