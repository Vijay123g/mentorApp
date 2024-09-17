import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.scss']
})
export class FacultyDashboardComponent implements OnInit {
  facultyName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const name = localStorage.getItem('name');
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
}
