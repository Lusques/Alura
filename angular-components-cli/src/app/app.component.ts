// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
// Local data and assets
import { AddContactFormComponent } from './components/add-contact-form/add-contact-form.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    AddContactFormComponent,
    AddContactComponent,
    ContactsListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
