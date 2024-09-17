import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationsComponent;
  let fixture: ComponentFixture<RegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationsComponent]
    });
    fixture = TestBed.createComponent(RegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
