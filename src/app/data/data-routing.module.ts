import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';

const routes: Routes = [
  { path: '', redirectTo:'view', pathMatch:'full' },
  { path: 'view', component: DataViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
