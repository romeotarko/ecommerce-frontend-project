import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'chart-component', component: ChartComponent },
  {path: 'main-component',component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
