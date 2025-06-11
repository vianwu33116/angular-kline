export interface Currency {
  symbol: string;
  priceChangePercent: number;
  price: number; // Average price
}

export interface klineData {
  time: number;   // Open time
  open: number;   // Open price
  high: number;   // High price
  low: number;    // Low price
  close: number;  // Close price
  volume: number; // Volume of trades
}