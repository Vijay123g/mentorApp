import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefulatAdminComponentComponent } from './defulat-admin-component.component';

describe('DefulatAdminComponentComponent', () => {
  let component: DefulatAdminComponentComponent;
  let fixture: ComponentFixture<DefulatAdminComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefulatAdminComponentComponent]
    });
    fixture = TestBed.createComponent(DefulatAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
