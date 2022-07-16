import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private baseURL: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public get(endPoint: string = ''): Observable<any> {
    return this.httpClient.get(this.baseURL).pipe(
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
