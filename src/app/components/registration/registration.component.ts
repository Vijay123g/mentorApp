import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationsComponent implements OnInit {
  registerForm: FormGroup;
  courses: any[] = [];
  coursesList: any[] = []; 
  displayedColumns: string[] = ['title', 'description', 'name', 'register'];

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private courseService: CourseService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      courseId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }


  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (response: any) => {
        this.coursesList = response;
        console.log("courseList",this.coursesList)
      },
      error => {
        this.snackBar.open('Error fetching courses', 'Close', { duration: 2000 });
        console.error('Error fetching courses', error);
      }
    );
  }

  registerForCourse(courseId:number): void{
    const studentId = localStorage.getItem('userId') || "";
    const isAlreadyRegistered = this.coursesList.some(course => course.id === courseId);
    if (!isAlreadyRegistered){
      alert('You have already registered for this course');
    }
    else{
    this.registrationService.registerCourse(studentId, courseId).subscribe(
      () =>{
        this.snackBar.open('Registration Sucess', 'Close', { duration: 3000 });
         this.router.navigate(['/student'])},

      error =>{ 
        this.snackBar.open('Error registering course', 'Close', { duration: 2000 });
        console.error('Error registering course', error) }
    );
  }

  }
}
