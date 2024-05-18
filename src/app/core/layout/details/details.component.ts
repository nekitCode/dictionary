import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetailsType } from '../../../models/details';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  imports: [RouterLink, CommonModule],
})
export class DetailsComponent {
  @Input() detail: DetailsType;

  constructor() {
    this.detail = {} as DetailsType;
  }
}
