import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateAnswersComponent } from './validate-answers.component';

describe('ValidateAnswersComponent', () => {
  let component: ValidateAnswersComponent;
  let fixture: ComponentFixture<ValidateAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateAnswersComponent]
    });
    fixture = TestBed.createComponent(ValidateAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
