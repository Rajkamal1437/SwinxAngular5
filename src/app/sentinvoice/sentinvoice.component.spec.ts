import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentinvoiceComponent } from './sentinvoice.component';

describe('SentinvoiceComponent', () => {
  let component: SentinvoiceComponent;
  let fixture: ComponentFixture<SentinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
