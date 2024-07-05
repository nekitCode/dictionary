import { Routes } from '@angular/router';

import { MillingComponent } from './modules/Milling/components/milling.component';
import { MainComponent } from './core/layout/main/main.component';
import { FaceMillingComponent } from './modules/Milling/components/FaceMilling/faceMilling.component';
import { ShoulderMillingComponent } from './modules/Milling/components/ShoulderMilling/ShoulderMilling.component';
import { SideFaceMillingComponent } from './modules/Milling/components/SideFaceMilling/sideFaceMilling.component';
import { FaceMillingFormulaComponent } from './modules/Milling/components/formules/faceMillingFormula.component';
import { MaterialComponent } from './shared/material/material.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'milling',
    component: MillingComponent,
  },
  {
    path: 'milling/face-milling',
    component: FaceMillingComponent,
  },
  {
    path: 'milling/shoulder-milling',
    component: ShoulderMillingComponent,
  },
  {
    path: 'milling/side-face-milling',
    component: SideFaceMillingComponent,
  },
  {
    path: 'milling/face-milling/formula',
    component: FaceMillingFormulaComponent,
  },
  {
    path: 'milling/face-milling/material',
    component: MaterialComponent,
  },
];
