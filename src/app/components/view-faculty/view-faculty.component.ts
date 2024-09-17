import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.scss']
})
export class ViewFacultyDetailsComponent implements OnInit {
  facultyList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFacultyDetails();
  }

  getFacultyDetails(): void {
    this.http.get<any[]>('http://localhost:3000/admin/faculty-details').subscribe((data) => {
      this.facultyList = data;
    });
  }
}
