import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDetails } from '../../models/modal';

@Component({
  selector: 'app-modal-window',
  standalone: true,
  templateUrl: './modalWindow.component.html',
  styleUrl: './modalWindow.component.scss',
  imports: [CommonModule, FormsModule],
})
export class ModalWindowComponent {
  @Input() modalDetails = {} as ModalDetails;
  @Output() childEvent = new EventEmitter<number>();

  handlerRage(range: number) {
    this.modalDetails.value = range;
  }

  handlerConfirm() {
    this.childEvent.emit(this.modalDetails.value);
  }
}
