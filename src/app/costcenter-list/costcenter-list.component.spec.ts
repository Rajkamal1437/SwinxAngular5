import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcenterListComponent } from './costcenter-list.component';

describe('CostcenterListComponent', () => {
  let component: CostcenterListComponent;
  let fixture: ComponentFixture<CostcenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostcenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
