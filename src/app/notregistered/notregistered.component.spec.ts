import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotregisteredComponent } from './notregistered.component';

describe('NotregisteredComponent', () => {
  let component: NotregisteredComponent;
  let fixture: ComponentFixture<NotregisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotregisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
