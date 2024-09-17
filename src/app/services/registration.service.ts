import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  registerStudent(registration: any, courseId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registration);
  }

  registerCourse(studentId: string, courseId: number): Observable<any> {
    const url = `${this.baseUrl}/registration/register`;
    const body = { studentId, courseId };
    return this.http.post<any>(url, body);
  }
  getRegistrationsByStudent(studentId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/registrations/student/${studentId}`);
  }

  getRegistrationsByCourse(courseId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/registration/registrations/course/${courseId}`);
  }

  unregisterStudent(registrationId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/unregister/${registrationId}`);
  }
}
