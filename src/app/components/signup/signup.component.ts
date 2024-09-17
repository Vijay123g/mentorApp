import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  
  constructor (private authService: AuthService, private router: Router) {
    this.signupForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();

  }
  createFormGroup () : FormGroup {
    return new FormGroup({
      name : new FormControl("",[Validators.required,Validators.minLength(2)]),
      email : new FormControl("",[Validators.required,Validators.email]),
      password : new FormControl("",[Validators.required,Validators.minLength(8)]),
      role: new FormControl("Student"),
     
    });
  }

  // signup(): void {
  //   this.authService.signup(this.signupForm.value).subscribe((msg) => {
  //     next: () => {
  //       this.successMessage = "You have successfully signed up!";
  //       setTimeout(() => this.router.navigate(["/login"]), 2000);
  //     },
  //     (error: { message: any; }) => {
  //       this.errorMessage = `Signup failed: ${error.message}`;
  //     }
  //   });
  // }

  signup(): void {
    this.authService.signup(this.signupForm.value).subscribe({
      next: () => {
        this.successMessage = "You have successfully signed up!";
        setTimeout(() => this.router.navigate(["/login"]), 2000);
      },
      error: (error) => {
        this.errorMessage = `Signup failed: ${error.message}`;
      }
    });
  }

}
