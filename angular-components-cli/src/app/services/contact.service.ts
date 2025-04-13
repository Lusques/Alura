import { Injectable } from '@angular/core';
import agenda from '../../agenda.json';
interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = agenda;
  constructor() {
    const contactsLS = JSON.parse(localStorage.getItem('contacts') || '');

    this.contacts = contactsLS || null;

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts() {
    return this.contacts;
  }
}
