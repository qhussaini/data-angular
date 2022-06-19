import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataRoutingModule } from './data-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DataViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxDatatableModule,
    DataRoutingModule
  ]
})
export class DataModule { }
