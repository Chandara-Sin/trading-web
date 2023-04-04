export type StockCardType = {
  title: string;
  series: number[];
  symbol: string;
  volumn: number;
  netChange: number;
  deltaIndicator: "up" | "down";
};
