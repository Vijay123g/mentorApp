import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/view-course`);
  }

  getFacultyDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/faculty-details`);
  }

  getFacultyCourseList(facultyId : string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/faculty-courses/${facultyId}`);
  }


  assignCourse(courseData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/course/assign`, courseData);
  }

  getRegisteredCourses(studentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/student-courses/${studentId}`);
  }

  getAssignedCourses() : Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/admin/assigned-courses/`,);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/course`, course);
  }
}
