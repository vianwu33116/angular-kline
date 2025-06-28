import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { BinanceApiService } from 'src/app/services/binance-api.service';
import { KlineData } from 'src/app/models/currency.model';
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickData,
  UTCTimestamp,
} from 'lightweight-charts';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: [],
})
export class DrilldownComponent implements OnInit, OnDestroy {
  symbol: string = '';
  interval: string = '4h';
  limitAmount: number = 100;
  klineData: KlineData[] = [];
  private chart: IChartApi | null = null;
  private candlestickSeries: ISeriesApi<'Candlestick'> | null = null;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  constructor(
    private readonly router: Router,
    private readonly binanceApiService: BinanceApiService
  ) {}

  ngOnInit(): void {
    this.symbol = this.router.url.split('/').pop() || '';
    this.initChart();
    this.fetchKlineData();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.remove();
    }
  }

  onIntervalChanged(interval: string): void {
    this.interval = interval;
    this.fetchKlineData();
  }

  // ResizeObserver: aim to monitor size change of the container
  private setResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        if (this.chart) {
          this.chart.applyOptions({
            width: this.chartContainer.nativeElement.clientWidth,
            height: this.chartContainer.nativeElement.clientHeight,
          });
          this.chart?.timeScale().fitContent(); // Ensure automatic scaling after resizing
        }
      });
      resizeObserver.observe(this.chartContainer.nativeElement);
    }
  }

  private initChart() {
    // create lightweight-charts chart and basic style setup
    this.chart = createChart(this.chartContainer.nativeElement, {
      width: this.chartContainer.nativeElement.clientWidth,
      height: this.chartContainer.nativeElement.clientHeight,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000000',
        attributionLogo: false, // hide TradingView logo
      },
      grid: {
        vertLines: { color: '#E1E4E6' },
        horzLines: { color: '#E1E4E6' },
      },
      crosshair: {
        mode: 1, // 1: CrosshairMode.Magnet	usually used for candlestick charts
      },
      rightPriceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
        timeVisible: true,
        secondsVisible: false,
      },
    });

    this.candlestickSeries = this.chart.addCandlestickSeries({
      upColor: '#42A39A',
      downColor: '#E56152',
      borderUpColor: '#42A39A',
      borderDownColor: '#E56152',
      wickUpColor: '#42A39A',
      wickDownColor: '#E56152',
      priceFormat: {
        type: 'price',
        precision: 6,
        minMove: 0.000001,
      },
    });
    this.setResizeObserver();
  }

  // Get kline data and set to the chart
  private fetchKlineData() {
    this.binanceApiService
      .getKline(this.symbol, this.interval, this.limitAmount)
      .subscribe({
        next: (data) => {
          this.klineData = data;
          const candlestickData: CandlestickData[] = this.klineData.map((item) => ({
            time: Math.floor(item.time / 1000) as UTCTimestamp, // Ensure time is in UTC format
            open: item.open,
            high: item.high,
            low: item.low,
            close: item.close,
          }));
          if (this.candlestickSeries) {
            this.candlestickSeries.setData(candlestickData);
            this.chart?.timeScale().fitContent();
          }
        },
        error: (error) => {
          console.error('Error fetching kline data:', error);
          if(error.status === 400 || error.name === 'HttpErrorResponse') {
            alert('Symbol not found. Please check the symbol and try again.');
            this.router.navigate(['']);
          }
        },
      });
    }
}
