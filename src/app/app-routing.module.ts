import { ReportComponent } from './layout/report/report.component';
import { ReportListComponent } from './layout/report-list/report-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportMapComponent } from './layout/report-map/report-map.component';

const routes: Routes = [
  {path: 'reports', component: ReportListComponent},
  {path: 'reports/:id', component: ReportComponent},
  {path: 'index', component: ReportMapComponent},
  {path: '', redirectTo: 'index'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
