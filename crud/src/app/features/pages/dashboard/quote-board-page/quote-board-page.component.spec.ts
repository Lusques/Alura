import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBoardPageComponent } from './quote-board-page.component';

describe('QuoteBoardPageComponent', () => {
  let component: QuoteBoardPageComponent;
  let fixture: ComponentFixture<QuoteBoardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteBoardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
