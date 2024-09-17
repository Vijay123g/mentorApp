import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCoursesComponent } from './faculty-courses.component';

describe('FacultyCoursesComponent', () => {
  let component: FacultyCoursesComponent;
  let fixture: ComponentFixture<FacultyCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyCoursesComponent]
    });
    fixture = TestBed.createComponent(FacultyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
