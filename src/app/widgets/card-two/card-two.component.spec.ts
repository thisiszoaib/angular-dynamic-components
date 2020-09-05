import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTwoComponent } from './card-two.component';

describe('CardTwoComponent', () => {
  let component: CardTwoComponent;
  let fixture: ComponentFixture<CardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
