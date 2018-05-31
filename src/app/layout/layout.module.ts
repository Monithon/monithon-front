import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportMapComponent } from './report-map/report-map.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportListComponent, ReportMapComponent, ReportComponent],
  exports: [ReportListComponent, ReportMapComponent, ReportComponent]
})
export class LayoutModule { }
