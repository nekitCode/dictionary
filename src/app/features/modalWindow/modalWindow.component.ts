import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() modalDetils = {} as ModalDetails;
  @Output() childEvent = new EventEmitter<number>();

  handlerRage(range: number) {
    this.modalDetils.value = range;
  }

  hundlerConfirm() {
    this.childEvent.emit(this.modalDetils.value);
  }
}
