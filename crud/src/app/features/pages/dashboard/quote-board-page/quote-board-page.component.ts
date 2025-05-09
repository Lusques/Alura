import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-board-page',
  templateUrl: './quote-board-page.component.html',
  styleUrls: ['./quote-board-page.component.scss'],
})
export class QuoteBoardPageComponent implements OnInit {
  cardsList = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() {}

  ngOnInit(): void {}
}
