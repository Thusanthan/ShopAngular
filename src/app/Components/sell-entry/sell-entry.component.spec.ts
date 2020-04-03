import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellEntryComponent } from './sell-entry.component';

describe('SellEntryComponent', () => {
  let component: SellEntryComponent;
  let fixture: ComponentFixture<SellEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
