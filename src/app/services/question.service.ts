import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:3000/question/question';
  private baseUrl ='http://localhost:3000/question';

  constructor(private http: HttpClient) {}

  addQuestion(question: { courseId: number, facultyId: string, questionText: string }): Observable<any> {
    return this.http.post(this.apiUrl, question);
  }

  getQuestionsByCourse(courseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${courseId}`);
  }

  getQuestionsByFaculty(course_id : number,faculty_id:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/faculty/${course_id }/${faculty_id}`);
  }
}
