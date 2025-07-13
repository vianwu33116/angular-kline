import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyCardComponent } from './currency-card.component';
import { Currency } from 'src/app/models/currency.model';
import { By } from '@angular/platform-browser';

describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyCardComponent],
    });
    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CurrencyCardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have default currency input', () => {
    expect(component.currency).toEqual({
      symbol: 'symbol',
      priceChangePercent: '0',
      price: '0',
    });
  });

  it('should display currency symbol', () => {
    const currency: Currency = {
      symbol: 'BTCUSDT',
      priceChangePercent: '1.5',
      price: '50000',
    };
    component.currency = currency;
    fixture.detectChanges();

    const symbolElement = fixture.debugElement.query(
      By.css('.currency-symbol'),
    );
    expect(symbolElement.nativeElement.textContent).toContain(currency.symbol);
  });

  it('should parse priceChangePercent correctly', () => {
    const priceChangePercent = '1.50000000';
    const parsedValue = component.parseFloat(priceChangePercent);
    expect(parsedValue).toBe(1.5);
  });
});
