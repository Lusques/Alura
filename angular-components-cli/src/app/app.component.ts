import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    ListGroupComponent,
    InputSearchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
}
