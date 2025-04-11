import { Component, Input } from '@angular/core';

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
  @Input() letter: string = '';
  @Input() agenda: Contact[] = [];

  filterContactsByLetter(letter: string): Contact[] {
    return this.agenda.filter((contact) =>
      contact.nome.toLowerCase().startsWith(letter)
    );
  }
}
