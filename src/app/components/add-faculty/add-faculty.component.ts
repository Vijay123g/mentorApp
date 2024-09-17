import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss']
})
export class AddFacultyComponent implements OnInit {
  facultyForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.facultyForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.facultyForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      role: new FormControl('Faculty')
    });
  }

  addFaculty(): void {
    if (this.facultyForm.valid) {
      this.authService.createFaculty(this.facultyForm.value).subscribe(() => {
        this.router.navigate(['admin/faculty-details']);
      });
    }
  }
}
