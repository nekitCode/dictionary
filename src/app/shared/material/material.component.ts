import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialDetails } from '../../modules/Milling/models/material';
import data from '../../../assetsData/materialsData.json';
import { MaterialService } from '../services/material.service';

@Component({
  selector: 'app-material',
  standalone: true,
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
  imports: [CommonModule, FormsModule],
})
export class MaterialComponent implements OnInit {
  @Input() materialDetils: MaterialDetails[] = [];

  type = {} as MaterialDetails;
  materialData: MaterialDetails[] = [];
  materialType: Set<string> = new Set();
  materialsDetails: MaterialDetails[] = [];
  currentMaterialItem = {} as MaterialDetails;

  constructor(private materialDataService: MaterialService) {}

  ngOnInit(): void {
    this.materialData = this.materialDataService.getData();
    this.materialData.forEach(item => {
      this.materialType.add(item.materialGroup);
    });
    this.type = this.materialData[0];
    this.materialsDetails = this.materialData.filter(
      item => item.materialGroup === this.type.materialGroup
    );
    this.currentMaterialItem =
      this.materialDataService.getCurrentMaterialItem();
  }

  handlerFilterByType(materialType: string) {
    this.materialsDetails = this.materialData.filter(
      item => item.materialGroup === materialType
    );
  }

  getCurrentItem(currentItem: MaterialDetails) {
    this.currentMaterialItem = currentItem;
    this.materialDataService.setCurrentMaterialItem(currentItem);
    window.history.back();
  }
}
