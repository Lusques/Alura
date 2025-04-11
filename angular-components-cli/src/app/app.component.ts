// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
// Local data and assets
import agenda from '../agenda.json';
import { AddContactFormComponent } from './pages/add-contact-form/add-contact-form.component';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    ListGroupComponent,
    InputSearchComponent,
    AddContactFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  inputSearchValue: string = '';
  agendaJson: Contact[] = agenda;
  getInputSearchValue($value: string) {
    this.inputSearchValue = $value;
  }
}
