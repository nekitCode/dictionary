import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetailsType } from '../../../models/details';
import { DetailsComponent } from '../details/details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [RouterLink, DetailsComponent, CommonModule],
})
export class MainComponent {
  public details: DetailsType[] = [
    {
      id: 1,
      img: '',
      title: 'Milling',
      link: '/milling',
    },
    {
      id: 2,
      img: '',
      title: 'Turning',
      link: '/turning',
    },
    {
      id: 3,
      img: '',
      title: 'Treading',
      link: '/treading',
    },
    {
      id: 4,
      img: '',
      title: 'Holemaking',
      link: '/holemaking',
    },
  ];
}
