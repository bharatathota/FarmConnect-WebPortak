import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor,HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {sharedService} from 'src/app/services/sharedService';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private sessionStorageService: SessionStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted request' + request.url);
        const token=this.sessionStorageService.retrieve('token');
        if(token){
            request = request.clone({
                headers: request.headers.set(
                  'Authorization', 'Bearer '+token
                )
              });
        }
        if(!request.headers.has('Content-Type')){
        request = request.clone({
            headers: request.headers.set(
              'Content-Type', 'application/json'
          )
        });
        }
        request = request.clone({
          headers: request.headers.set(
            'Accept','application/json,text/plain,*/*'
          )
        });
        return next.handle(request);
    }
}
