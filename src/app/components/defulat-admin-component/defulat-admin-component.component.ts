import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-defulat-admin-component',
  templateUrl: './defulat-admin-component.component.html',
  styleUrls: ['./defulat-admin-component.component.scss']
})
export class DefulatAdminComponentComponent implements OnInit {
  facultyCount = 0;
  studentCount = 0;
  courseCount = 20;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchCounts();
  }

  fetchCounts() {
    this.authService.getCounts().subscribe((counts) => {
      this.facultyCount = counts.facultyCount;
      this.studentCount = counts.studentCount;
      this.courseCount = counts.coursesCount;
    });
  }
}

