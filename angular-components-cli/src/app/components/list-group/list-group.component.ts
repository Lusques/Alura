// Angular imports
import { Component, Input } from '@angular/core';
// Local data and assets
import agenda from '../../../agenda.json';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
})
export class ListGroupComponent {
  @Input() title: string = '';
  contacts: Contact[] = agenda;
  filterContactsByLetter(letter: string): Contact[] {
    return this.contacts.filter((contact) =>
      contact.nome.toLowerCase().startsWith(letter)
    );
  }
}
