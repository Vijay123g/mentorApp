import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {
  results: any[] = []; 
  resultMessage: string = '';

  constructor(private answerService: AnswerService) {}

  ngOnInit(): void {
    const studentId = localStorage.getItem('userId') || "";
    this.answerService.getAnswersByStudent(studentId).subscribe(
      response => {
        this.results = response.answers;
        this.resultMessage = this.calculateResultMessage(response.allValidated);
      },
      error => {
        console.error('Error fetching results', error);
        this.resultMessage = 'Error fetching results.';
      }
    );
  }

  private calculateResultMessage(allValidated: boolean): string {
    if (allValidated) {
      return 'You have passed all your exams/assignments!';
    } else {
      return 'Waiting for results or validation.';
    }
  }
}
