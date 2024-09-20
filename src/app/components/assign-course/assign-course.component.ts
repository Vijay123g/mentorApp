import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.scss']
})
export class AssignCourseComponent implements OnInit {
  assignCourseForm: FormGroup;
  facultyList: any[] = [];  
  coursesList: any[] = []; 

  constructor(private courseService: CourseService,private snackBar: MatSnackBar) {
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
        this.snackBar.open('Error fetching faculty details', 'Close', { duration: 2000 });
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
        this.snackBar.open('Error fetching courses', 'Close', { duration: 2000 });
        console.error('Error fetching courses', error);
      }
    );
  }

  assignCourse(): void {
    if (this.assignCourseForm.valid) {
      this.courseService.assignCourse(this.assignCourseForm.value).subscribe(
        () => {
          this.snackBar.open('Course assigned successfully!', 'Close', { duration: 2000 });
        },
        error => {
          this.snackBar.open('Error assigning course', 'Close', { duration: 2000 });
        }
      );
    }
  }
}
