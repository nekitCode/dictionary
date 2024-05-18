import { Routes } from '@angular/router';
import { MillingComponent } from './modules/Milling/components/milling.component';
import { MainComponent } from './core/layout/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'milling',
    component: MillingComponent,
  },
];
