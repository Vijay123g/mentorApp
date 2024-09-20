import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-faculty-courses',
  templateUrl: './faculty-courses.component.html',
  styleUrls: ['./faculty-courses.component.scss']
})
export class FacultyCoursesComponent {
  courseList: any[] = [];
  constructor(private courseService: CourseService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadFacultyCourses();
  }

  loadFacultyCourses(): void {
    const facultyId = localStorage.getItem('userId')||"";
    this.courseService.getFacultyCourseList(facultyId).subscribe(
      (response: any) => {
        this.courseList = response;
      },
      error => {
        this.snackBar.open('Error fetching faculty details', 'Close', { duration: 2000 });
        console.error('Error fetching faculty details', error);
      }
    );
  }



}
