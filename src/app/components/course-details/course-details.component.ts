import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from 'src/app/services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class ViewCourseDetailsComponent implements OnInit {
  courseList = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isCardView = false;
  assignedCourseList: any;
  facultyList: any;
  newCourse = {
    title: '',
    description: '',
    facultyId: '',
  };

  isAddingCourse = false;

  constructor(private http: HttpClient, private courseService: CourseService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getCourseDetails();
    this.loadFacultyDetails();
  }

toggleView(): void {
  this.isCardView = !this.isCardView;
}

  toggleAddCourse(): void {
    this.isAddingCourse = !this.isAddingCourse;
  }

  getCourseDetails(): void {
    this.courseService.getAssignedCourses().subscribe(
      (response: any) => {
        this.courseList = response;
        this.courseList.paginator = this.paginator;
      },
      (error: any) => {
        this.snackBar.open('Error fetching courses', 'Close', { duration: 2000 });
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
        this.snackBar.open('Error fetching faculty details', 'Close', { duration: 2000 });
        console.error('Error fetching faculty details', error);
      }
    );
  }

  createCourse(): void {
    this.courseService.createCourse(this.newCourse).subscribe(
      (response: any) => {
        this.snackBar.open('CCourse created successfully!', 'Close', { duration: 2000 });
        console.log('Course created successfully:', response);
        this.getCourseDetails();
        this.isAddingCourse = false;
      },
      (error: any) => {
        this.snackBar.open('Error creating course', 'Close', { duration: 2000 });
        console.error('Error creating course', error);
      }
    );
  }
}
