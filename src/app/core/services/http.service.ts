import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public get(endPoint: string): Observable<any> {
    // const headers = new HttpHeaders({
    //   Authorization: `token ${environment.gitHubToken}`,
    // });
    // return this.httpClient.get(endPoint, { headers: headers }).pipe(
    return this.httpClient.get(endPoint).pipe(
      catchError(this.errorHandler<any>('get ', null)),
      map((response) => {
        return response;
      })
    );
  }

  private errorHandler<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.log('Http service ', error);
      const serverError = {
        error: error.error,
        status: error.status,
      };
      return throwError(serverError);
    };
  }
}
