import agenda from '../../../agenda.json';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { ListGroupComponent } from '../../components/list-group/list-group.component';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}
@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [HeaderComponent, InputSearchComponent, ListGroupComponent],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  inputSearchValue: string = '';
  agendaJson: Contact[] = agenda;
  getInputSearchValue($value: string) {
    this.inputSearchValue = $value;
  }

}
