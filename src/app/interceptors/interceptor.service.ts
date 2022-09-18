import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'x-token': 'ABC123456789XYZ'
    });

    const req_clone = req.clone({
      headers
    });

    throw next.handle(req_clone)
              .pipe(
                catchError(this.handleError)
              );
  }

  handleError(error: HttpErrorResponse) {
    console.log('Something were wrong');
    console.warn(error);
    return throwError(() => error);
  }
}
