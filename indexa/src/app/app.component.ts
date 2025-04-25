import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ListWrapperComponent } from './components/list-wrapper/list-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    ListWrapperComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly letters = 'abcdefghijklmnopqrstuvwxyz';
}
