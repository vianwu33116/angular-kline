import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css'],
})
export class CurrencyCardComponent {
  @Input() currency: Currency = {
    symbol: 'symbol',
    priceChangePercent: '0',
    price: '0',
  };

  parseFloat(priceChangePercent: string): number {
    return parseFloat(priceChangePercent);
  }
}
