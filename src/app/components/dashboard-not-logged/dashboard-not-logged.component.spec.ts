import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotLoggedComponent } from './dashboard-not-logged.component';

describe('DashboardNotLoggedComponent', () => {
  let component: DashboardNotLoggedComponent;
  let fixture: ComponentFixture<DashboardNotLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNotLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
