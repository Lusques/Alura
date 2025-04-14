import agenda from '../../../agenda.json';
import { Component } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { ListGroupComponent } from '../../components/list-group/list-group.component';
import { RouterLink } from '@angular/router';
import Contact from '../../models/contact';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [InputSearchComponent, ListGroupComponent, RouterLink],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  inputSearchValue: string = '';
  agendaJson: Contact[] = agenda;
  constructor(private contactService: ContactService) {}

  resetAgenda() {
    this.contactService.setContactsToEmpty();
  }
  getInputSearchValue($value: string) {
    this.inputSearchValue = $value;
  }
}
