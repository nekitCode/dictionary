import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shoulder-milling',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ShoulderMilling.component.html',
  styleUrl: './ShoulderMilling.component.scss',
})
export class ShoulderMillingComponent {
	formGroup: FormGroup;

	constructor() {
		this.formGroup = new FormGroup({
			name: new FormControl(''),
			age: new FormControl('')
		})
	}

  onChange(text: string) {
    console.log(text);
  }
}
