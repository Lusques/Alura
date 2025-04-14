import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import Contact from '../../models/contact';
@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
})
export class ListGroupComponent implements OnInit {
  @Input() letter: string = '';
  // @Input() agenda: Contact[] = [];
  @Input() searchValue: string = '';
  agenda: Contact[] = [];

  constructor(private contactsService: ContactService) {}

  ngOnInit(): void {
    this.agenda = this.contactsService.getContacts();
  }

  filterContactsByLetter(letter: string): Contact[] {
    const filteredAgenda = this.filterBySearchBar();
    return filteredAgenda.filter((contact) =>
      contact.nome?.toLowerCase().startsWith(letter)
    );
  }
  filterBySearchBar(): Contact[] {
    if (!this.searchValue) {
      return this.agenda;
    }
    const search = this.removeAccents(this.searchValue.toLowerCase());
    const filteredAgenda = this.agenda.filter((contact) => {
      const name = this.removeAccents(contact.nome?.toLowerCase());
      return name?.includes(search);
    });
    return filteredAgenda;
  }
  showListGroup(): boolean {
    return !!this.filterContactsByLetter(this.letter).length;
  }

  removeAccents(value: string): string {
    return value?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
