import { Routes } from '@angular/router';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';

export const routes: Routes = [
  {
    path: 'form',
    component: AddContactComponent,
  },
  {
    path: 'contact-list',
    component: ContactsListComponent,
  },
  {
    path: '',
    redirectTo: '/contact-list',
    pathMatch: 'full',
  },
];
