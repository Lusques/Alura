import { Component, OnInit } from '@angular/core';
import { GtmService } from '../../services/gtm.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  constructor(private gtm: GtmService) {}
  ngOnInit(): void {
    this.gtm.pushEvent({
      event: 'page:page_viewed',
      pageName: 'home',
    });
  }
  onClickOpenModalButton() {
    this.gtm.pushEvent({
      event: 'modal:open_modal',
      element: 'button:open_modal',
    });
  }
  onClickCTAButton() {
    this.gtm.pushEvent({
      event: 'modal:click_cta',
      element: 'button:cta',
    });
  }
  onClickCloseButton() {
    this.gtm.pushEvent({
      event: 'modal:click_close',
      element: 'button:close',
    });
  }
}
