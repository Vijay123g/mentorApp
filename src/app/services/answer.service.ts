import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getAnswersToValidate(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/answers/validate`);
  }

  getFacultyByCourse(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/answer/faculty/${courseId}`);
  }

  validateAnswer(answerId: number, validatedBy: string, validationStatus: boolean): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/answer/answer/validate`, { answerId, validatedBy, validationStatus });
  }
  submitAnswer(answerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/answer/answer`, answerData);
  }

  getQuestionsByCourse(courseId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/questions/${courseId}`);
  }

  getAnswerStatus(registrationId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/answer/answers/status/${registrationId}`);
  }

  getAnswersByStudent(studentId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/answer/answers/student/${studentId}`);
  }

  getAnswersByFaculty(facultyId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/answer/faculty/${facultyId}/answers`);
  }
}
