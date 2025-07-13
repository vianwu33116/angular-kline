import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { MainComponent } from './pages/main/main.component';
import { DrilldownComponent } from './pages/drilldown/drilldown.component';
import { HeaderComponent } from './components/header/header.component';
import { TimeSelectorComponent } from './components/time-selector/time-selector.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BinanceApiService } from './services/binance-api.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyCardComponent,
    MainComponent,
    DrilldownComponent,
    HeaderComponent,
    TimeSelectorComponent,
    NotFoundComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [BinanceApiService, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
