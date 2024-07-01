import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-background',
  standalone: true,
  imports: [],
  templateUrl: './imageBackground.component.html',
  styleUrl: './imageBackground.component.scss',
})
export class ImageBackgroundComponent {
  @Input() pathName: string;

  constructor() {
    this.pathName = '';
    console.log(this.pathName);
  }
}
