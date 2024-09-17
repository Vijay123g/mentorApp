import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddFacultyComponent } from './components/add-faculty/add-faculty.component';
import { AssignCourseComponent } from './components/assign-course/assign-course.component';
import { ViewCourseDetailsComponent } from './components/course-details/course-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewFacultyDetailsComponent } from './components/view-faculty/view-faculty.component';
import { AnswersComponent } from './components/answer/answer.component';
import { QuestionsComponent } from './components/question/question.component';
import { RegistrationsComponent } from './components/registration/registration.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { DefulatAdminComponentComponent } from './components/defulat-admin-component/defulat-admin-component.component';
import { FacultyCoursesComponent } from './components/faculty-courses/faculty-courses.component';
import { ValidateAnswersComponent } from './components/validate-answers/validate-answers.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    SignupComponent,
    HomeComponent,
    AdminDashboardComponent,
    AddFacultyComponent,
    AssignCourseComponent,
    ViewCourseDetailsComponent,
    ViewFacultyDetailsComponent,
    AnswersComponent,
    QuestionsComponent,
    RegistrationsComponent,
    StudentDashboardComponent,
    FacultyDashboardComponent,
    ViewResultsComponent,
    DefulatAdminComponentComponent,
    FacultyCoursesComponent,
    ValidateAnswersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
