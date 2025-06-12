export interface Currency {
  symbol: string;
  priceChangePercent: string;
  price: string; // Average price
}

export interface klineData {
  time: number;   // Open time
  open: number;   // Open price
  high: number;   // High price
  low: number;    // Low price
  close: number;  // Close price
  volume: number; // Volume of trades
}


// Binance API data format:
export interface BinanceTickerData {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string; // Weighted average price in the last 24 hours
  prevClosePrice: string; // Previous close price
  lastPrice: string;
  lastQty: string; // Last quantity traded
  bidPrice: string; // Highest bid price
  bidQty: string; // Quantity at the highest bid price
  askPrice: string; // Lowest ask price
  askQty: string; // Quantity at the lowest ask price
  openPrice: string;
  highPrice: string; // Highest price in the last 24 hours
  lowPrice: string; // Lowest price in the last 24 hours
  volume: string; // Total volume traded in the last 24 hours
  quoteVolume: string; // Total quote volume traded in the last 24 hours
  openTime: number;
  closeTime: number;
  firstId: number; // First trade ID in the 24-hour period
  lastId: number; // Last trade ID in the 24-hour period
  count: number; // Number of trades in the 24-hour period
}

export type BinanceKlineData = [
  number,   // 0: Open time
  string,   // 1: Open price
  string,   // 2: High price
  string,   // 3: Low price
  string,   // 4: Close price
  string,   // 5: Volume
  number,   // 6: Close time
  string,   // 7: Quote asset volume
  number,   // 8: Number of trades
  string,   // 9: Taker buy base asset volume
  string,   // 10: Taker buy quote asset volume
  string    // 11: Ignore
];