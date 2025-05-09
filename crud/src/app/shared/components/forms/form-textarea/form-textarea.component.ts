import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.scss'],
})
export class FormTextareaComponent implements OnInit {
  @Input() id: string = 'floatingTextarea';
  @Input() label: string = 'Comments';
  fieldValue: string = '';
  constructor() {}

  ngOnInit(): void {}
}
