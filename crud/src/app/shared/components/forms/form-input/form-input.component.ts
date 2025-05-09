import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() id: string = 'floatingInput';
  @Input() label: string = 'Email address';
  @Input() placeholder: string = 'name@example.com';
  @Input() type: string = 'text';
  inputValue: string = 'exemplo';
  constructor() {}

  ngOnInit(): void {}
}
