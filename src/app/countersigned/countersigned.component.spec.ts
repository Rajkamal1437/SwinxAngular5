import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersignedComponent } from './countersigned.component';

describe('CountersignedComponent', () => {
  let component: CountersignedComponent;
  let fixture: ComponentFixture<CountersignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountersignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
