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
      img: '/assets/milling.png',
      title: 'Milling',
      link: '/milling',
    },
    {
      id: 2,
      img: '/assets/turning.png',
      title: 'Turning',
      link: '/turning',
    },
    {
      id: 3,
      img: '/assets/threading.png',
      title: 'Threading',
      link: '/threading',
    },
    {
      id: 4,
      img: '/assets/holeMaking.png',
      title: 'Holemaking',
      link: '/holemaking',
    },
  ];
}
