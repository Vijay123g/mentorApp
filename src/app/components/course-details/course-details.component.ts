import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class ViewCourseDetailsComponent implements OnInit {
  courseList: any[] = [];
  assignedCourseList: any;
  facultyList: any;
  newCourse = {
    title: '',
    description: '',
    facultyId: '',
  };

  isAddingCourse = false;

  constructor(private http: HttpClient, private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourseDetails();
    this.loadFacultyDetails();
  }

  toggleAddCourse(): void {
    this.isAddingCourse = !this.isAddingCourse;
  }

  getCourseDetails(): void {
    this.courseService.getAssignedCourses().subscribe(
      (response: any) => {
        this.courseList = response;
      },
      (error: any) => {
        console.error('Error fetching courses', error);
      }
    );
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

  createCourse(): void {
    this.courseService.createCourse(this.newCourse).subscribe(
      (response: any) => {
        console.log('Course created successfully:', response);
        this.getCourseDetails(); // Refresh course list
        this.isAddingCourse = false;
      },
      (error: any) => {
        console.error('Error creating course', error);
      }
    );
  }
}
