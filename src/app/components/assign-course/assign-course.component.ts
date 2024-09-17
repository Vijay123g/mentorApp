import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.scss']
})
export class AssignCourseComponent implements OnInit {
  assignCourseForm: FormGroup;
  facultyList: any[] = [];  
  coursesList: any[] = []; 

  constructor(private courseService: CourseService) {
    this.assignCourseForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.assignCourseForm = this.createFormGroup();
    this.loadFacultyDetails();
    this.loadCourses();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      courseId: new FormControl('', [Validators.required]),
      facultyId: new FormControl('', [Validators.required]),
    });
  }

  loadFacultyDetails(): void {
    this.courseService.getFacultyDetails().subscribe(
      (response: any) => {
        this.facultyList = response;
      },
      error => {
        console.error('Error fetching faculty details', error);
      }
    );
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (response: any) => {
        this.coursesList = response;
      },
      error => {
        console.error('Error fetching courses', error);
      }
    );
  }

  assignCourse(): void {
    if (this.assignCourseForm.valid) {
      this.courseService.assignCourse(this.assignCourseForm.value).subscribe(
        () => {
          alert('Course assigned successfully');
        },
        error => {
          alert('Error assigning course');
        }
      );
    }
  }
}
