import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  efficiencyDetails,
  rakeAngelDetails,
  wearFactorDetails,
} from '../../../../../stub/index';
import { ModalWindowComponent } from '../../../../shared/modalWindow/modalWindow.component';
import { MaterialService } from '../../../../shared/services/material.service';
import { UtilitiesModule } from '../../../../UtilitiesModule';
import { MaterialDetails } from '../../models/material';
import { FaceMillingMaterialService } from '../../services/faceMIllingMaterial.service';

@Component({
  selector: 'app-face-milling',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule,
    ModalWindowComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './faceMilling.component.html',
  styleUrl: './faceMilling.component.scss',
})
export class FaceMillingComponent implements OnInit {
  calculationForm: FormGroup;
  utilities: UtilitiesModule;
  isOpenRakeAngleModal: boolean = false;
  isEfficiencyModal: boolean = false;
  isWearFactorModal: boolean = false;
  materialData = {} as MaterialDetails;
  rakeAngelDetails = rakeAngelDetails;
  efficiencyDetails = efficiencyDetails;
  wearFactorDetails = wearFactorDetails;

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
    this.utilities = new UtilitiesModule();
  }

  ngOnInit(): void {
    this.faceMillingDataService.getMaterialData().subscribe({
      next: (data: MaterialDetails[]) => {
        this.materialService.setData(data);
        if (Object.keys(this.materialService.getCurrentMaterialItem()).length) {
          this.materialData = this.materialService.getCurrentMaterialItem();
          return;
        }
        this.materialData = this.materialService.getData()[0];
        this.materialService.setCurrentMaterialItem(this.materialData);
      },
    });
  }

  handlerDiameter(dc: number) {
    this.calculationForm.value.dc = dc;
  }

  handlerCuttingSpeed(vc: number) {
    this.calculationForm.value.vc = vc;

    this.calculationForm.value.n = this.utilities.getDcValue(
      this.calculationForm.value.dc,
      this.calculationForm.value.vc
    );
  }

  handlerPerMinute(n: number) {
    this.calculationForm.value.n = n;
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
