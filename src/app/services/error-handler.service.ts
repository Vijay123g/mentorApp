import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => error);
    };
  }
}
