import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialDetails } from '../../modules/Milling/models/material';
import materilaData from '../../modules/Milling/services/materialsData.json';

@Component({
  selector: 'app-material',
  standalone: true,
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
  imports: [CommonModule, FormsModule],
})
export class MaterialComponent {
  @Input() modalDetils = {} as any;
  @Output() childEvent = new EventEmitter<any>();

  type: MaterialDetails;
  materialData: MaterialDetails[] = [];
  materialType: Set<string> = new Set();
  materialsDetails: MaterialDetails[] = [];

  constructor() {
    this.materialData = materilaData;
    this.materialData.forEach(item => {
      this.materialType.add(item.materialGroup);
    });
    this.type = this.materialData[0];
    this.materialsDetails = this.materialData.filter(
      item => item.materialGroup === this.type.materialGroup
    );
  }

  handlerFilterByType(materialType: string) {
    this.materialsDetails = this.materialData.filter(
      item => item.materialGroup === materialType
    );
  }
}
