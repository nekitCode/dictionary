import { Component } from '@angular/core';
import { BackgroundComponent } from '../../../../features/background/background.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-milling',
  standalone: true,
  templateUrl: './faceMilling.component.html',
  styleUrl: './faceMilling.component.scss',
  imports: [BackgroundComponent, CommonModule, RouterLink],
})
export class FaceMillingComponent {
  calculationForm: FormGroup;

  constructor() {
    this.calculationForm = new FormGroup({
      dc: new FormControl(0),
      vc: new FormControl(0),
      n: new FormControl(0),
      z: new FormControl(0),
      ap: new FormControl(0),
      ae: new FormControl(0),
      entryAngle: new FormControl(0),
      fz: new FormControl(0),
      fn: new FormControl(0),
      vf: new FormControl(0),
      cutLength: new FormControl(0),
      overhang: new FormControl(0),
      rakeAngle: new FormControl(0),
      efficiency: new FormControl(0),
      wearFactor: new FormControl(0),
    });

    console.log(this.calculationForm.value.vc);
  }
}
