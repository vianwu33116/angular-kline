import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DrilldownComponent } from './pages/drilldown/drilldown.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, MainComponent, DrilldownComponent, NotFoundComponent, HeaderComponent],
    imports: [RouterModule.forRoot([
        { path: '', component: MainComponent },
        { path: 'drilldown/:symbol', component: DrilldownComponent },
        { path: '**', component: NotFoundComponent }
    ])]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-kline'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-kline');
  });
});
