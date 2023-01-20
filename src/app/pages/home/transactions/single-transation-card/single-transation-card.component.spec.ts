import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTransationCardComponent } from './single-transation-card.component';

describe('SingleTransationCardComponent', () => {
  let component: SingleTransationCardComponent;
  let fixture: ComponentFixture<SingleTransationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTransationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTransationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
