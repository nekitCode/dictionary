import { Injectable } from '@angular/core';
import { MaterialDetails } from '../../modules/Milling/models/material';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  materialData: MaterialDetails[] = [];
  currentChangedMaterial = {} as MaterialDetails;

  setData(data: MaterialDetails[]) {
    this.materialData = data;
  }

  getData() {
    return this.materialData;
  }

  getCurrentMaterialItem() {
    return this.currentChangedMaterial;
  }

  setCurrentMaterialItem(item: MaterialDetails) {
    this.currentChangedMaterial = item;
  }
}
