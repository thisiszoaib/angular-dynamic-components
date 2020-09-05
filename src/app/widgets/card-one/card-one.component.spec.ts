import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOneComponent } from './card-one.component';

describe('CardOneComponent', () => {
  let component: CardOneComponent;
  let fixture: ComponentFixture<CardOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
