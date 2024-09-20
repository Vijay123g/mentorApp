import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFacultyComponent } from '../add-faculty/add-faculty.component';
import { AssignCourseComponent } from '../assign-course/assign-course.component';
import { ViewFacultyDetailsComponent } from '../view-faculty/view-faculty.component';
import { ViewCourseDetailsComponent } from '../course-details/course-details.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  isAdmin: boolean = false;
  totalFaculty: number = 0;
  totalStudents: number = 0;
  totalCourses: number = 0;

  constructor(private authService: AuthService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.authService.userRole$.subscribe(role => {
      this.isAdmin = role === 'Admin';
    });
  }

  
  
  openAddFacultyDialog() {
    this.dialog.open(AddFacultyComponent, {
      width: '600px',
    });
  }

  openAssignCoursesDialog() {
    this.dialog.open(AssignCourseComponent, {
      width: '600px',
    });
  }

  openViewFacultyDialog() {
    this.dialog.open(ViewFacultyDetailsComponent, {
      width: '600px',
    });
  }

  openViewCoursesDialog() {
    this.dialog.open(ViewCourseDetailsComponent, {
      width: '600px',
    });
  }

  loadDashboardCounts(): void {
    // Assuming these services return observables with the count
    // this.facultyService.getFacultyCount().subscribe(count => {
    //   this.totalFaculty = count;
    // });

    // this.courseService.getCourseCount().subscribe(count => {
    //   this.totalCourses = count;
    // });

    // this.studentService.getStudentCount().subscribe(count => {
      // this.totalStudents = count;
    // });

  }}

