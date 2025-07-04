import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BinanceApiService } from 'src/app/services/binance-api.service';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {
  currencies: Currency[] = [];
  constructor(
    private readonly router: Router,
    private readonly binanceApiService: BinanceApiService
  ) {}

  ngOnInit(): void {
    this.binanceApiService.getTicker().subscribe({
      next: (data) => {
        this.currencies = data;
      },
      error: (error) => {
        console.error('Error fetching ticker data:', error);
      }
    });
  }
  navigateToDrilldown(symbol: string): void {
    this.router.navigate(['/drilldown', symbol]);
  }
}
