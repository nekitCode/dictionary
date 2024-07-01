import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoBackLinkComponent } from '../../../features/goBackLink/goBackLink.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink, GoBackLinkComponent],
})
export class HeaderComponent {}
