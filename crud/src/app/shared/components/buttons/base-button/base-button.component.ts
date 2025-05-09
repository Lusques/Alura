import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
  host: {
    '[class]': 'styleClass'
  }
})
export class BaseButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'neutral' = 'primary';
  @Input() styleClass: string = '';
  constructor() {}

  ngOnInit(): void {}
}
