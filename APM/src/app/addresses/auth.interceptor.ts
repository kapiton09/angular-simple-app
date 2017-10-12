import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // tslint:disable-next-line:max-line-length
    token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3RhbmRhcmRDdXN0b21lciIsImlhdCI6MTUwNzYwNDM1N30.KapqmRMLu9xbk9c6iKj-2R0tFkCRJpnnF7PY_tCDzbk';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem(this.token) != null) {
            return next.handle(req.clone({
                setHeaders: {
                }
            }));
        }
        // tslint:disable-next-line:one-line
        else {
            return next.handle(req);
        }
    }
}
