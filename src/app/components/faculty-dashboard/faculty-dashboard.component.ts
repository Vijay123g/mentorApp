
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FacultyCoursesComponent } from '../faculty-courses/faculty-courses.component';
import { ViewQuestionsComponent } from '../view-questions/view-questions.component';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.scss']
})
export class FacultyDashboardComponent implements OnInit {
  facultyName: string = '';
  assignedCoursesCount: number = 0;
  questionsCount: number = 0;
  validationPendingCount: number = 0;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.authService.userRole$.subscribe(role => {
      if (role === 'Faculty') {
        this.facultyName = localStorage.getItem('name') || '';
      } else {
        this.router.navigate(['/login']);
      }
    });
  }


  viewAssignedCourses(): void {
    this.router.navigate(['/faculty/view-courses']);
  }

  addQuestions(): void {
    this.router.navigate(['/faculty/add-question']);
  }

  validateAnswers(): void {
    this.router.navigate(['/faculty/validate-answers']);
  }

  // openViewAssignedCoursesDialog(): void {
  //   this.dialog.open(FacultyCoursesComponent, {
  //     width: '400px'
  //   });
  // }

  // openViewQuestionsDialog(): void {
  //   this.dialog.open(ViewQuestionsComponent, {
  //     width: '400px'
  //   });
  // }
}
