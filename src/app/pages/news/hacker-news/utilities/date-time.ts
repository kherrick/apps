/* misc date utils */
export const pad = (n: number) => (n < 10 ? '0' + n : n);

export const getYear = (dateTime: string) => Number(dateTime.slice(0, 4));

export const getMonth = (dateTime: string) => Number(dateTime.slice(5, 7));

export const getDay = (dateTime: string) => Number(dateTime.slice(8, 10));

export const getDate = (dateTime?: string) =>
  (dateTime ? new Date(dateTime.slice(0, 10)) : new Date())
    .toISOString()
    .split('T')[0];

export const getDateString = (currentDate: string, dayChange: number = 0) => {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + dayChange);
  const dateString = date.toISOString();

  return `${getYear(dateString)}-${pad(getMonth(dateString))}-${pad(
    getDay(dateString),
  )} @ 23:59:59`;
};

export const getNextDateTime = (currentDate: string, dayChange: number = 0) =>
  getDateString(getDate(currentDate), dayChange);
