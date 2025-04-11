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
  @Input() searchValue: string = '';

  filterContactsByLetter(letter: string): Contact[] {
    const filteredAgenda = this.filterBySearchBar();
    return filteredAgenda.filter((contact) =>
      contact.nome.toLowerCase().startsWith(letter)
    );
  }
  filterBySearchBar(): Contact[] {
    if (!this.searchValue) {
      return this.agenda;
    }
    const search = this.removeAccents(this.searchValue.toLowerCase());
    const filteredAgenda = this.agenda.filter((contact) => {
      const name = this.removeAccents(contact.nome.toLowerCase());
      return name.includes(search);
    });
    return filteredAgenda;
  }
  showListGroup(): boolean {
    return !!this.filterContactsByLetter(this.letter).length;
  }

  removeAccents(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
