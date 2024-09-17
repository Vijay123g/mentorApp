import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacultyComponent } from './view-faculty.component';

describe('ViewFacultyComponent', () => {
  let component: ViewFacultyComponent;
  let fixture: ComponentFixture<ViewFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFacultyComponent]
    });
    fixture = TestBed.createComponent(ViewFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
