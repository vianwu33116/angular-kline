import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Currency, klineData } from "../models/currency.model";

@Injectable({
    providedIn: 'root'
})

export class BinanceApiService {
    private baseUrl: string = 'https://api.binance.com/api/v3';

    constructor(private http: HttpClient) {}

    /**
     * Fetches the latest ticker data from Binance API.
     * @returns An Observable containing an array of ticker data.
     */
    getTicker(): Observable<Currency[]> {
        // Fetching the 24hr ticker data from Binance API
        const url = `${this.baseUrl}/ticker/24hr`;
        return this.http.get<any[]>(url).pipe(
            map(res => res.slice(0, 20).map(item => ({ // Limit to first 20 results
                symbol : item.symbol,
                priceChangePercent: item.priceChange,
                price: parseFloat(item.lastPrice)
            }))) 
        );
    }
    getKline(symbol: string, interval: string = '1d', limit: number = 100): Observable<klineData[]> {
        // Fetching Kline data for a specific symbol from Binance API
        const url = `${this.baseUrl}/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
        return this.http.get<any[]>(url).pipe(
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