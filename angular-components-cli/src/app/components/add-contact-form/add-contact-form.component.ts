import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.scss',
})
export class AddContactFormComponent {
  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('Lucas Silva'),
      telphone: new FormControl('99 99999-9999'),
      email: new FormControl('lucas@teste.com.br'),
      birth: new FormControl('2025-04-13'),
      url: new FormControl('https://github.com/Lusques'),
      observations: new FormControl('Hello World!'),
    });
  }
}
