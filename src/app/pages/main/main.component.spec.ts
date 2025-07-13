import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { CurrencyCardComponent } from 'src/app/components/currency-card/currency-card.component';
import { BinanceApiService } from '../../services/binance-api.service';
import { Currency } from 'src/app/models/currency.model';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

// 測試 MainComponent 的基本功能
// 元件能正確建立
// 初始化時會呼叫 API 並設定 currencies
// 畫面會正確渲染出多個 app-currency-card
// 點擊卡片會呼叫 navigateToDrilldown 並導頁

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let binanceApiService: BinanceApiService;

  const mockCurrencies: Currency[] = [
    { symbol: 'BTCUSDT', priceChangePercent: '1.5', price: '50000' },
    { symbol: 'ETHUSDT', priceChangePercent: '2.0', price: '4000' },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, CurrencyCardComponent],
      providers: [
        BinanceApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    binanceApiService = TestBed.inject(BinanceApiService);
    spyOn(binanceApiService, 'getTicker').and.returnValue(of(mockCurrencies));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create MainComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTicker on init and set currencies', () => {
    expect(binanceApiService.getTicker).toHaveBeenCalled();
    expect(component.currencies).toEqual(mockCurrencies);
  });

  it('should render currency cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-currency-card');
    expect(cards.length).toBe(2);
  });

  it('should navigate to drilldown on card click', () => {
    spyOn(component, 'navigateToDrilldown');
    const card = fixture.nativeElement.querySelector('app-currency-card');
    card.click();
    expect(component.navigateToDrilldown).toHaveBeenCalledWith('BTCUSDT');
  });
});
