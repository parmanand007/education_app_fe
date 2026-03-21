export type DateRangeType =
  | "THIS_MONTH"
  | "LAST_6_MONTHS"
  | "YEAR_TO_DATE"
  | "LAST_YEAR";

export const getDateRange = (type: DateRangeType) => {
  const now = new Date();

  let start: Date;
  let end: Date = new Date(now);

  switch (type) {
    case "THIS_MONTH":
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      break;

    case "LAST_6_MONTHS":
      start = new Date(now.getFullYear(), now.getMonth() - 5, 1);
      break;

    case "YEAR_TO_DATE":
      start = new Date(now.getFullYear(), 0, 1);
      break;

    case "LAST_YEAR":
      start = new Date(now.getFullYear() - 1, 0, 1);
      end = new Date(now.getFullYear() - 1, 11, 31);
      break;

    default:
      start = new Date(now.getFullYear(), 0, 1);
  }

  return {
    start_date: start.toISOString(),
    end_date: end.toISOString()
  };
};