import { Component, Input } from '@angular/core';
import { ImageBackgroundComponent } from '../../../../features/imageBackground/imageBackground.component';

@Component({
  selector: 'app-face-milling-formula',
  standalone: true,
  imports: [ImageBackgroundComponent],
  templateUrl: './faceMillingFormula.component.html',
  styleUrl: './faceMillingFormula.component.scss',
})
export class FaceMillingFormulaComponent {}
