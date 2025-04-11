import { Component, Input } from '@angular/core';
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
}
