// login.component.ts

import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: () => {
            this.successMessage = "Login successful!";
            this.errorMessage = undefined;
          },
          error: (error) => {
            this.errorMessage = error.error?.message || "Login failed: Invalid credentials or server error";
            this.successMessage = undefined;
          },
        });
    }
  }
}
