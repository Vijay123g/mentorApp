import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.scss']
})
export class ViewFacultyDetailsComponent implements OnInit {
  facultyList: any[] = [];
  paginatedList: any[] = [];
  pageSize: number = 50;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFacultyDetails();
  }

  getFacultyDetails(): void {
    this.http.get<any[]>('http://localhost:3000/admin/faculty-details').subscribe((data) => {
      this.facultyList = data;
      this.totalPages = Math.ceil(this.facultyList.length / this.pageSize);
      this.updatePaginatedList();
    });
  }

  updatePaginatedList(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedList = this.facultyList.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedList();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedList();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedList();
    }
  }
}
