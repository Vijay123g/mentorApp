import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.scss']
})
export class ViewQuestionsComponent implements OnInit {

  questionsList: any[] = [];
  facultyId: number | null = null;
  coursesList: any[] = [];
  selectedCourseTitle: string | null = null;

  constructor(
    private questionService: QuestionService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.facultyId = Number(localStorage.getItem('userId'));
    this.loadCourses();
    // if (this.facultyId) {
    //   this.loadQuestionsByFaculty(this.facultyId);
    // }
  }

  loadCourses(): void {
    const facultyId = localStorage.getItem('userId') || "";
    this.courseService.getFacultyCourseList(facultyId).subscribe(
      (response: any) => {
        this.coursesList = response;
      },
      (error: any) => {
        console.error('Error fetching courses', error);
      }
    );
  }

  onCourseSelect(event: any): void {
    const courseId = event.value;
    console.log('courseId',courseId);
    this.selectedCourseTitle = this.coursesList.find(course => course.id == courseId)?.title || 'Selected Course';
    this.loadQuestionsByCourse(courseId);
  }

  loadQuestionsByCourse(courseId: number): void {
    console.log('load quesyion',courseId);
    const facultyId = localStorage.getItem('userId') || "";
    this.questionService.getQuestionsByFaculty(courseId,facultyId).subscribe(
      (response: any) => {
        this.questionsList = response.questions;
        console.log('questionsList',this.questionsList);
      },
      (error: any) => {
        console.error('Error fetching questions for the course', error);
      }
    );
  }
}
