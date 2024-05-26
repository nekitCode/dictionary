import { Component } from '@angular/core';
import {DetailsType} from "../../../models/details";
import {DetailsComponent} from "../../../core/layout/details/details.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-milling',
  standalone: true,
  templateUrl: './milling.component.html',
  styleUrl: './milling.component.scss',
  imports: [DetailsComponent, CommonModule]
})
export class MillingComponent {
  public details: DetailsType[] = [
    {
      id: 1,
      img: '/assets/faceMilling.png',
      title: 'Face Milling',
      link: 'face-milling',
    },
    {
      id: 2,
      img: '/assets/shoulderMilling.png',
      title: 'Shoulder Milling',
      link: 'shoulder-milling',
    },
    {
      id: 3,
      img: '/assets/sideFaceMilling.png',
      title: 'Side Face Milling',
      link: 'side-face-milling',
    }
  ];
}
