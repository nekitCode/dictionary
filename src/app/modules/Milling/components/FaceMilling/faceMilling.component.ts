import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from '../../../../features/background/background.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModalWindowComponent } from '../../../../shared/modalWindow/modalWindow.component';
import { ModalDetails } from '../../../../models/modal';
import { MaterialDetails } from '../../models/material';
import { FaceMillingMaterialService } from '../../services/faceMIllingMaterial.service';
import { MaterialService } from '../../../../shared/services/material.service';

@Component({
  selector: 'app-face-milling',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule,
    BackgroundComponent,
    ModalWindowComponent,
  ],
  templateUrl: './faceMilling.component.html',
  styleUrl: './faceMilling.component.scss',
})
export class FaceMillingComponent implements OnInit {
  calculationForm: FormGroup;
  isOpenRakeAngleModal: boolean = false;
  isEfficiencyModal: boolean = false;
  isWearFactorModal: boolean = false;
  materialData = {} as MaterialDetails;

  rakeAngelDetils: ModalDetails = {
    srcImagesList: [
      '/assets/rakePic1.png',
      '/assets/rakePic2.png',
      '/assets/rakePic3.png',
    ],
    description:
      'Rake angle affects the ability of the tool to shear the work material and form the chip. Depending on the Tool Material and Workpc. material, It can be positive or negative. Positive rake angles reduce the cutting forces and negative angle increases the cutting forces. It is important to note that the rake angle mentioned here is the net effect of the rake angle in the insert and the inclination in the tool holder.Users are advised to check the configuration of the tool.In the event of uncertainity, it is recomended to use a default approximated value from above selection.',
    measure: 'degrees',
    min: -15,
    max: 30,
    value: 0,
    step: 1,
  };
  efficiencyDetils: ModalDetails = {
    srcImagesList: [
      '/assets/effiPic1.png',
      '/assets/effiPic2.png',
      '/assets/effiPic3.png',
    ],
    description:
      'Machine"s efficiency is the ratio of work output to work input. It is expressed as a percentage. While the efficiency of an ideal machine is 100 percent, an actual machine"s efficiency will always be less than 100% because of (for example, but not limited to) transmission losses. A modern CNC Machine with Direct drive often have very high efficiency upto 95% while gear train driven machine often exhibit machine efficiency of 75% to 85%',
    measure: 'percent',
    min: 70,
    max: 98,
    value: 0,
    step: 1,
  };
  wearFactorDetils: ModalDetails = {
    srcImagesList: [
      '/assets/wearPic1.jpg',
      '/assets/wearPic2.jpg',
      '/assets/wearPic3.jpg',
    ],
    description:
      'Wear factor denotes extent of wear on the cutting edge. This factor is used to adjust the calculated cutting force and power requirements to best reflect the conditions. Since the wear rate of the cutting material depends on various cutting conditions like machining operation, surface quality needed, workpiece material etc., it is difficult to accuratly predict the wear factor. The here given approximations, are based on experiental observations. In the event of uncertainity, it is recomended to use a default approximated value from above selection',
    measure: 'percent',
    min: 0,
    max: 50,
    value: 0,
    step: 1,
  };

  constructor(
    private faceMillingDataService: FaceMillingMaterialService,
    private materialService: MaterialService
  ) {
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

  ngOnInit(): void {
    this.faceMillingDataService
      .getMaterialData()
      .subscribe((data: MaterialDetails[]) => {
        this.materialService.setData(data);
        if (Object.keys(this.materialService.getCurrentMaterialItem()).length) {
          this.materialData = this.materialService.getCurrentMaterialItem();
          return;
        }
        this.materialData = this.materialService.getData()[0];
        this.materialService.setCurrentMaterialItem(this.materialData);
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

  handlerIsOpenRakeAngelModal() {
    this.isOpenRakeAngleModal = true;
  }

  handlerDataRakeAngle(rakeAngle: number) {
    this.isOpenRakeAngleModal = false;
    this.calculationForm.value.rakeAngle = rakeAngle;
  }

  handlerEfficiency(efficiency: number) {
    console.log(efficiency);
  }

  handlerIsOpenEfficiencyModal() {
    this.isEfficiencyModal = true;
  }

  handlerDataEfficiency(efficiency: number) {
    this.isEfficiencyModal = false;
    this.calculationForm.value.efficiency = efficiency;
  }

  handlerWearFactor(wearFactor: number) {
    console.log(wearFactor);
  }

  handlerIsOpenWearFactorModal() {
    this.isWearFactorModal = true;
  }

  handlerDataWearFactor(wearFactor: number) {
    this.isWearFactorModal = false;
    this.calculationForm.value.wearFactor = wearFactor;
  }

  getCurrentMaterialItem(currentMaterial: any) {
    console.log(currentMaterial, 'CURRENT');
    console.log(this.materialData);
  }
}
