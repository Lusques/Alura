import { Component, Input } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';

@Component({
  selector: 'app-list-wrapper',
  standalone: true,
  imports: [ListHeaderComponent],
  templateUrl: './list-wrapper.component.html',
  styleUrl: './list-wrapper.component.scss',
})
export class ListWrapperComponent {
  @Input() letter: string = '';
}
