import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoggedComponent } from './dashboard-logged.component';

describe('DashboardLoggedComponent', () => {
  let component: DashboardLoggedComponent;
  let fixture: ComponentFixture<DashboardLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
