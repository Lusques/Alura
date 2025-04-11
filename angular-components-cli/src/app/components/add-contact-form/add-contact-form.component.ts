import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.scss',
})
export class AddContactFormComponent {
  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('Nome'),
      telphone: new FormControl(),
      email: new FormControl(),
      birth: new FormControl(),
      url: new FormControl(),
      observatios: new FormControl(),
    });
  }
}
