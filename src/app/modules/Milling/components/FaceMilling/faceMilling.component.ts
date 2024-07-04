import { Component } from '@angular/core';
import { BackgroundComponent } from '../../../../features/background/background.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModalWindowComponent } from '../../../../features/modalWindow/modalWindow.component';
import { ModalDetails } from '../../../../models/modal';

@Component({
  selector: 'app-face-milling',
  standalone: true,
  imports: [
    BackgroundComponent,
    CommonModule,
    RouterLink,
    FormsModule,
    ModalWindowComponent,
  ],
  templateUrl: './faceMilling.component.html',
  styleUrl: './faceMilling.component.scss',
})
export class FaceMillingComponent {
  calculationForm: FormGroup;
  isOpenRakeAngleModal: boolean = false;

  modalDetils: ModalDetails = {
    srcImagesList: [
      '/assets/rakePic1.png',
      '/assets/rakePic2.png',
      '/assets/rakePic3.png',
    ],
    description:
      'Rake angle affects the ability of the tool to shear the work material and form the chip. Depending on the Tool Material and Workpc. material, It can be positive or negative. Positive rake angles reduce the cutting forces and negative angle increases the cutting forces. It is important to note that the rake angle mentioned here is the net effect of the rake angle in the insert and the inclination in the tool holder.Users are advised to check the configuration of the tool.In the event of uncertainity, it is recomended to use a default approximated value from above selection.',
    min: -15,
    max: 30,
    value: 6,
    step: 1,
  };

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
  }

  handlerDiameter(dc: number) {
    this.calculationForm.value.dc = dc;
  }

  handlerCuttingSpeed(vc: number) {
    console.log(vc);
  }

  handlerPerMinute(n: number) {
    console.log(n);
  }

  handlerNumberOfTeeth(z: number) {
    console.log(z);
  }

  handlerDepthOfCut(ap: number) {
    console.log(ap);
  }

  handlerWithOfCut(ap: number) {
    console.log(ap);
  }

  handlerEnterAngle(entryAngle: number) {
    console.log(entryAngle);
  }

  handlerIsOpenModal() {
    this.isOpenRakeAngleModal = true;
  }

  handlerFeedPerTooth(fz: number) {
    console.log(fz);
  }

  handlerFeedPerRevolution(fn: number) {
    console.log(fn);
  }

  handlerLinearFeed(vf: number) {
    console.log(vf);
  }

  handlerLengthOfCut(lengthOfCut: number) {
    console.log(lengthOfCut);
  }

  handlerOverhang(overhang: number) {
    console.log(overhang);
  }

  handlerRakeAngel(rakeAngle: number) {
    console.log(rakeAngle);
  }

  handlerDataRakeAngle(rakeAngle: number) {
    this.isOpenRakeAngleModal = !this.isOpenRakeAngleModal;
    this.calculationForm.value.rakeAngle = rakeAngle;
  }

  handlerEfficiency(efficiency: number) {
    console.log(efficiency);
  }

  handlerWearFactor(WearFactor: number) {
    console.log(WearFactor);
  }
}
