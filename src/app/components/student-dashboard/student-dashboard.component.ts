import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  studentName?: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.studentName = localStorage.getItem('name') || '';
  }

  registerCourse() {
    this.router.navigate(['/student/register-course']);
  }

  attemptExam() {
    this.router.navigate(['/student/attempt-exam']);
  }

  viewResults() {
    this.router.navigate(['/student/view-results']);
  }
}
