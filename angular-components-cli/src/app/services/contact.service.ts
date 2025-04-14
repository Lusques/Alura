import { Injectable, OnInit } from '@angular/core';
import Contact from '../models/contact';
import agenda from '../../agenda.json';

@Injectable({
  providedIn: 'root',
})
export class ContactService implements OnInit {
  private contacts: Contact[] = agenda;

  ngOnInit(): void {
    this.saveContactsToLocalStorage();
    this.loadContactsFromLocalStorage();
  }

  createContact(contact: Contact) {
    this.contacts.push(contact);
    console.log(this.contacts);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
  saveContactsToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
  loadContactsFromLocalStorage() {
    const contactsLSString: string | null = localStorage.getItem('contacts');
    const contactsLS: Contact[] = contactsLSString
      ? JSON.parse(contactsLSString)
      : [];
    this.contacts = contactsLS;
  }

  getContacts() {
    return this.contacts;
  }

  setContactsToEmpty() {
    localStorage.removeItem('contacts');
  }
}
