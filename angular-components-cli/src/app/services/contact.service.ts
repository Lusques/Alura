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
    const contactsLSString: string | null = localStorage.getItem('contacts');
    const contactsLS: Contact[] = contactsLSString
      ? JSON.parse(contactsLSString)
      : [];

    this.contacts = contactsLS;

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  createContact(contact: Contact) {
    this.contacts.push(contact);
    console.log(this.contacts);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts() {
    return this.contacts;
  }
}
