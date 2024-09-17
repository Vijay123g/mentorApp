import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

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
    private router: Router
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
        console.error('Error fetching courses', error);
      }
    );
  }

  // onSubmit(): void {
  //   if (this.registerForm.valid) {
  //     const studentId = localStorage.getItem('userId') || "";
  //     const courseId = this.registerForm.value.courseId;
  //     this.registrationService.registerCourse(studentId, courseId).subscribe(
  //       () => this.router.navigate(['/student']),
  //       error => console.error('Error registering course', error)
  //     );
  //   }
  // }
  registerForCourse(courseId:number): void{
    const studentId = localStorage.getItem('userId') || "";
    this.registrationService.registerCourse(studentId, courseId).subscribe(
      () =>{
        alert("course registration sucess")
         this.router.navigate(['/student'])},

      error => console.error('Error registering course', error)
    );

  }
}
