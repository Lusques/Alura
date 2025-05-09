import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'neutral' = 'primary';
  constructor() {}

  ngOnInit(): void {}
}
