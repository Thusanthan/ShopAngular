import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnEntryComponent } from './return-entry.component';

describe('ReturnEntryComponent', () => {
  let component: ReturnEntryComponent;
  let fixture: ComponentFixture<ReturnEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
