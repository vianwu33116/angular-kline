import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['../../app.component.css','./currency-card.component.css']
})
export class CurrencyCardComponent {
  @Input() currency: Currency = {
    symbol: '',
    priceChangePercent: 0,
    price: 0,
  };
}
