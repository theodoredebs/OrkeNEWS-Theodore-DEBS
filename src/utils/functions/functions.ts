import moment from "moment";

export const getTimeAgo = (publishedAt: string): string => {
  const date = moment(publishedAt);
  return date.fromNow();
};
