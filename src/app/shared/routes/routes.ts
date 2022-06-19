import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'data',
    loadChildren: () => import('../../data/data.module').then(m => m.DataModule)
  }
];
