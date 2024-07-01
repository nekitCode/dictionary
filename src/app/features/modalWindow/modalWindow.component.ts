import { Component, Input } from '@angular/core';
import { ModalDetails } from '../../models/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-window',
  standalone: true,
  templateUrl: './modalWindow.component.html',
  styleUrl: './modalWindow.component.scss',
  imports: [CommonModule, FormsModule],
})
export class ModalWindowComponent {
  @Input() modalDetils: ModalDetails;

  constructor() {
    this.modalDetils = {} as ModalDetails;
  }

  handlerRage(range: number) {
    this.modalDetils.value = range;
  }
}
