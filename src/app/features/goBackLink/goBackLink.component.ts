import { Component } from '@angular/core';

@Component({
  selector: 'app-go-back',
  standalone: true,
  templateUrl: './goBackLink.component.html',
  styleUrl: './goBackLink.component.scss',
  imports: [],
})
export class GoBackLinkComponent {
  goBack(): void {
    window.history.back();
  }
}
