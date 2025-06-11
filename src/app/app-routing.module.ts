import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DrilldownComponent } from './pages/drilldown/drilldown.component';

const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'drilldown/:symbol', component: DrilldownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
