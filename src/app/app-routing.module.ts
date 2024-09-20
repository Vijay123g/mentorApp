import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { AuthService } from './services/auth.service';
import { RoleGuard } from './guards/role.guard';
import { AddFacultyComponent } from './components/add-faculty/add-faculty.component';
import { AssignCourseComponent } from './components/assign-course/assign-course.component';
import { ViewCourseDetailsComponent } from './components/course-details/course-details.component';
import { ViewFacultyDetailsComponent } from './components/view-faculty/view-faculty.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { RegistrationsComponent } from './components/registration/registration.component';
import { AnswersComponent } from './components/answer/answer.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { QuestionsComponent } from './components/question/question.component';
import { DefulatAdminComponentComponent } from './components/defulat-admin-component/defulat-admin-component.component';
import { FacultyCoursesComponent } from './components/faculty-courses/faculty-courses.component';
import { ValidateAnswersComponent } from './components/validate-answers/validate-answers.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent, 
    canActivate: [RoleGuard], 
    data: { role: 'Admin' },
    children: [ 
       { path: '', component: DefulatAdminComponentComponent },
      { path: 'add-faculty', component:AddFacultyComponent },
      { path: 'assign-courses', component: AssignCourseComponent },
      { path: 'faculty-details', component: ViewFacultyDetailsComponent },
      { path: 'course-details', component: ViewCourseDetailsComponent }
    ]
  },
  { 
    path: 'faculty', 
    component: FacultyDashboardComponent, 
    canActivate: [RoleGuard], 
    data: { role: 'Faculty' },
    children: [
      { path: 'view-assigned-courses', component: FacultyCoursesComponent },
      { path: 'add-question', component: QuestionsComponent },
      { path: 'validate-answers', component: ValidateAnswersComponent } ,
      { path: 'view-questions',component:ViewQuestionsComponent}
    ]
  },
  { 
    path: 'student', 
    component: StudentDashboardComponent, 
    canActivate: [RoleGuard], 
    data: { role: 'Student' },
    children: [
      { path: 'register-course', component: RegistrationsComponent },
      { path: 'attempt-exam', component: AnswersComponent },
      { path: 'view-results', component: ViewResultsComponent } 
    ]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
