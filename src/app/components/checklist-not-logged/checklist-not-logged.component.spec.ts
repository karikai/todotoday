import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistNotLoggedComponent } from './checklist-not-logged.component';

describe('ChecklistNotLoggedComponent', () => {
  let component: ChecklistNotLoggedComponent;
  let fixture: ComponentFixture<ChecklistNotLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistNotLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistNotLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
