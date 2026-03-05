import { CMEDataItem } from "../../features/cmeTracking/api/cmeTracking.types";

export interface CMEMonthStats {
  month: string;
  program: number;
  contest: number;
}

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

export const buildCMEChartData = (
  data: CMEDataItem[]
): CMEMonthStats[] => {

  const stats: CMEMonthStats[] = MONTHS.map((month) => ({
    month,
    program: 0,
    contest: 0,
  }));

  data.forEach((item) => {

    const monthIndex = new Date(item.created_on).getMonth();

    if (item.earned_at === "PROGRAMS") {
      stats[monthIndex].program += item.cme_credits;
    }

    if (item.earned_at === "CONTEST") {
      stats[monthIndex].contest += item.cme_credits;
    }

  });

  return stats;
};