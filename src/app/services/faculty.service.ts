import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private apiUrl = 'http://localhost:3000/faculty';

  constructor(private http: HttpClient) {}

  getCoursesByFacultyId(facultyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/courses/${facultyId}`);
  }

  getStudentSubmissionsByFacultyId(facultyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/submissions/${facultyId}`);
  }
}
