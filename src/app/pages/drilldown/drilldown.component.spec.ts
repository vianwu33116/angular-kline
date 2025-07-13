import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrilldownComponent } from './drilldown.component';
import { TimeSelectorComponent } from 'src/app/components/time-selector/time-selector.component';
import { BinanceApiService } from 'src/app/services/binance-api.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

// Import the necessary Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DrilldownComponent', () => {
  let component: DrilldownComponent;
  let fixture: ComponentFixture<DrilldownComponent>;
  let binanceApiService: BinanceApiService;

  // Mock data for Kline
  const mockKlineData = [
    {
      time: 1622505600000,
      open: 35000,
      high: 36000,
      low: 34000,
      close: 35500,
      volume: 1000,
    },
    {
      time: 1622592000000,
      open: 35500,
      high: 37000,
      low: 35000,
      close: 36500,
      volume: 1200,
    },
    {
      time: 1622678400000,
      open: 36500,
      high: 38000,
      low: 36000,
      close: 37500,
      volume: 1500,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrilldownComponent, TimeSelectorComponent],
      providers: [
        BinanceApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        NoopAnimationsModule, // Use NoopAnimationsModule for testing without animations
      ],
    });

    binanceApiService = TestBed.inject(BinanceApiService);
    spyOn(binanceApiService, 'getKline').and.returnValue(of(mockKlineData));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DrilldownComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get kline data when triggerring onIntervalChanged', () => {
    const interval = '1m';
    component.onIntervalChanged(interval);
    expect(binanceApiService.getKline).toHaveBeenCalledWith('', interval, 100);
  });
});
