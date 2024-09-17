import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "http://localhost:3000/auth";
  private adminUrl ="http://localhost:3000/admin"

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userRole$ = new BehaviorSubject<string>('Student');
  userId: Pick<User, "id"> | undefined;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        tap(() => {

        }),
        catchError((error) => {
          return this.errorHandlerService.handleError<User>("signup")(error);
        })
      );
  }

  createFaculty(facultyData: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.adminUrl}/create-faculty`, facultyData, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("createFaculty"))
      );
  }

  login(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    userId: string;
    role: string;
    name?: string; 
  }> {
    return this.http
    .post<{ token: string; userId: string; role: string ;name: string; }>(
      `${this.url}/login`,
      { email, password },
      this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: string; role: string;name: string;}) => {
          localStorage.setItem("token", tokenObject.token);
          localStorage.setItem("userId", tokenObject.userId);
          localStorage.setItem("role", tokenObject.role);   
          localStorage.setItem("name" ,tokenObject.name); 

          this.isUserLoggedIn$.next(true);
          this.userRole$.next(tokenObject.role); 

          if (tokenObject.role === 'Admin') {
            this.router.navigate(["/admin"]);
          } else if (tokenObject.role === 'Faculty') {
            this.router.navigate(["/faculty"]);
          } else if (tokenObject.role === 'Student') {
            this.router.navigate(["/student"]);
          }
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: string;
            role: string;
          }>("login")
        )
      );
  }

  getRole(): string {
    return localStorage.getItem("role") || 'Student'; 
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.isUserLoggedIn$.next(false);
    this.userRole$.next('Student');
    this.router.navigate(["/login"]);
  }
}
