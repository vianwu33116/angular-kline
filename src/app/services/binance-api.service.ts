import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Currency, klineData, BinanceTickerData, BinanceKlineData } from "../models/currency.model";

@Injectable({
    providedIn: 'root'
})

export class BinanceApiService {
    private readonly baseUrl: string = 'https://api.binance.com/api/v3';

    constructor(private readonly http: HttpClient) {}

    // Fetching the 24hr ticker data from Binance API
    getTicker(): Observable<Currency[]> {
        const url = `${this.baseUrl}/ticker/24hr`;
        return this.http.get<BinanceTickerData[]>(url).pipe(
            map(res => res.slice(0, 24).map(item => ({ // Limit to first 24 results
                symbol : item.symbol,
                priceChangePercent: item.priceChange,
                price: item.lastPrice
            }))) 
        );
    }
    
    // Fetching Kline data for a specific symbol from Binance API
    getKline(symbol: string, interval: string = '1d', limit: number = 100): Observable<klineData[]> {
        const url = `${this.baseUrl}/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
        return this.http.get<BinanceKlineData[]>(url).pipe(
            map(res => res.map(item => ({
                time: item[0],
                open: parseFloat(item[1]),
                high: parseFloat(item[2]),
                low: parseFloat(item[3]),
                close: parseFloat(item[4]),
                volume: parseFloat(item[5])
            })))
        );
    }
}