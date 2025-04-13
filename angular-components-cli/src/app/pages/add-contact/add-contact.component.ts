import { Component } from '@angular/core';
import { AddContactFormComponent } from "../../components/add-contact-form/add-contact-form.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [AddContactFormComponent, HeaderComponent],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {

}
