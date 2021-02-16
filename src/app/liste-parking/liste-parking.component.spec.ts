import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParkingComponent } from './liste-parking.component';

describe('ListeParkingComponent', () => {
  let component: ListeParkingComponent;
  let fixture: ComponentFixture<ListeParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
