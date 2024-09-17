import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-faculty-courses',
  templateUrl: './faculty-courses.component.html',
  styleUrls: ['./faculty-courses.component.scss']
})
export class FacultyCoursesComponent {
  courseList: any[] = [];
  constructor(private courseService: CourseService) {}

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
        console.error('Error fetching faculty details', error);
      }
    );
  }



}
