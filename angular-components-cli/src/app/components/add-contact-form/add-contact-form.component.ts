import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.scss',
})
export class AddContactFormComponent {
  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('Lucas Silva', [Validators.required]),
      telphone: new FormControl('99 99999-9999', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birth: new FormControl('2025-04-13'),
      url: new FormControl('https://github.com/Lusques'),
      observations: new FormControl('Hello World!'),
    });
  }

  createContact() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
  submitCancel() {
    console.log('submit cancelado');
  }
}
