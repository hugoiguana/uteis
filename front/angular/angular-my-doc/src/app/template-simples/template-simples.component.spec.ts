import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSimplesComponent } from './template-simples.component';

describe('TemplateSimplesComponent', () => {
  let component: TemplateSimplesComponent;
  let fixture: ComponentFixture<TemplateSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
