import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-validate-answers',
  templateUrl: './validate-answers.component.html',
  styleUrls: ['./validate-answers.component.scss']
})
export class ValidateAnswersComponent implements OnInit {
  answers: any[] = [];
  displayedColumns: string[] = ['studentName','course','questionText', 'answerText', 'validationStatus'];

  constructor(
    private answerService: AnswerService, 
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const facultyId = localStorage.getItem('userId')||"";
    this.getAnswers(facultyId);
  }

  getAnswers(facultyId: string | null): void {
    if (facultyId) {
      this.answerService.getAnswersByFaculty(facultyId).subscribe((data: { answers: any[]; }) => {
        this.answers = data.answers;  
      });
    }
  }

  onValidate(element: any): void {
    
    this.answerService.validateAnswer(element.answer_id, element.validated_by, element.validation_status).subscribe({
      next: (response) => {
        this.snackBar.open('Answer validation status updated successfully!', 'Close', { duration: 2000 });
      },
      error: (error) => {
        console.error('Error updating validation status:', error);
        this.snackBar.open('Failed to update validation status.', 'Close', { duration: 2000 });
      }
    });
  }
}
