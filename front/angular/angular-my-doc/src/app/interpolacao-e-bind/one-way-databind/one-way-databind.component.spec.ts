import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayDatabindComponent } from './one-way-databind.component';

describe('OneWayDatabindComponent', () => {
  let component: OneWayDatabindComponent;
  let fixture: ComponentFixture<OneWayDatabindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayDatabindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayDatabindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
