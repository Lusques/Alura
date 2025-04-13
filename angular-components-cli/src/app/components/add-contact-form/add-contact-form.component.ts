import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-add-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.scss',
})
export class AddContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birth: new FormControl(''),
      url: new FormControl(''),
      observations: new FormControl(''),
    });
  }

  createContact() {
    if (this.contactForm.valid) {
      this.contactService.createContact(this.contactForm.value);
    }
  }
  submitCancel() {
    console.log('submit cancelado');
  }
}
