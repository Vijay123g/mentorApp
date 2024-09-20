import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnswerService } from '../../services/answer.service'; 
import { CourseService } from '../../services/course.service';
import { QuestionService } from '../../services/question.service'; 
import { RegistrationService } from 'src/app/services/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswersComponent implements OnInit {
  answersForm: FormGroup;
  courses: any[] = [];
  questions: any[] = [];
  coursesList : any[] =[];
  selectedCourseId: number | null = null;
  registrationId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private answerService: AnswerService,
    private courseService: CourseService,
    private questionService: QuestionService,
    private registrationService: RegistrationService,
    private snackBar: MatSnackBar
  ) {
    this.answersForm = this.fb.group({
      courseId: [null, Validators.required],
      questionId: [null, Validators.required],
      answer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  
    this.loadRegisteredCourses();
  }



  onCourseChange(): void {
    this.selectedCourseId = this.answersForm.value.courseId;
    if (this.selectedCourseId) {
      this.loadQuestions(this.selectedCourseId);
      this.loadRegistrationsForCourse(this.selectedCourseId);

    }
  }

  loadRegisteredCourses(): void {
    const studentId = localStorage.getItem('userId') || "";
    this.courseService.getRegisteredCourses(studentId).subscribe(
      (response: any) => {
          this.coursesList = response;
      },
      error => {
        this.snackBar.open('Error fetching registered courses', 'Close', { duration: 2000 });
        console.error('Error fetching registered courses', error);
      }
    );
  }

loadQuestions(courseId: number): void {
  this.questionService.getQuestionsByCourse(courseId).subscribe(
    (data: any) => {
      this.questions = data.questions;
    },
    error => {
      this.snackBar.open('Error fetching questions', 'Close', { duration: 2000 });
      console.error('Error fetching questions', error) }
  );
}

loadRegistrationsForCourse(courseId: number): void {
  this.registrationService.getRegistrationsByCourse(courseId).subscribe(
    (response: any) => {
      const registration = response.registrations.find((reg: { student_id: number; }) => reg.student_id === parseInt(localStorage.getItem('userId') || "", 10));
      if (registration) {
        this.registrationId = registration.registration_id;
      } else {
        this.snackBar.open('No registration found for this course', 'Close', { duration: 2000 });
        console.error('No registration found for this course.');
      }
    },
    error => console.error('Error fetching registrations for course', error)
  );
}

submitAnswer(): void {
  if (this.answersForm.valid) {
    const studentId = localStorage.getItem('userId') || "";
    const questionId = this.answersForm.value.questionId;
    const answerText = this.answersForm.value.answer;
    const courseId = this.answersForm.value.courseId;

    this.answerService.getFacultyByCourse(courseId).subscribe(
      (facultyData) => {
        const facultyId = facultyData.facultyId;

        this.answerService.submitAnswer({
          registrationId: this.registrationId,
           studentId,
          questionId,
          answerText,
          validatedBy: facultyId,
          validationStatus:false,
        }).subscribe(
          () => {
            this.snackBar.open('Answer Submitted successfully!', 'Close', { duration: 2000 });
          } ,
          error =>  this.snackBar.open('Error in Sumbmitting Answer', 'Close', { duration: 2000 })
        );
      },
      error => {
        this.snackBar.open('Error fetching faculty', 'Close', { duration: 2000 });
        console.error('Error fetching faculty', error) }
    );
  }
}

}
