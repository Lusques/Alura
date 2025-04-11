import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {
  inputText: string = '';
  @Output() getInputText = new EventEmitter<string>();
  onInputChange() {
    this.getInputText.emit(this.inputText);
  }
}
