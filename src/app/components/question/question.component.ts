import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { AuthService } from 'src/app/services/auth.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionsComponent implements OnInit {
  coursesList: any[] = []; 
  questionsForm: FormGroup;
  
  constructor(
    private questionService: QuestionService,
    private router: Router,
    private courseService: CourseService,
    private authService: AuthService ,
    private snackBar: MatSnackBar
  ) {
    this.questionsForm = new FormGroup({
      courseId: new FormControl('', [Validators.required]),
      questionText: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  submitQuestion(): void {
    if (this.questionsForm.valid) {
      const facultyId = localStorage.getItem('userId') || "";
      const { courseId, questionText } = this.questionsForm.value;
      this.questionService.addQuestion({ courseId, facultyId, questionText }).subscribe(
        () => {
          this.snackBar.open('Question added successfully', 'Close', { duration: 2000 });
          this.router.navigate(['/faculty']);
        },
        (error) => {
          this.snackBar.open('Error adding question', 'Close', { duration: 2000 });
          console.error('Error adding question:', error);
        }
      );
    }
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
}
