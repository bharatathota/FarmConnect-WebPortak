import { Injectable } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public authenticate = 'authenticate';
  constructor(private httpService: HttpCallsService) { }

  doLogin(params): Observable<any> {
    return this.httpService.post<any>(this.authenticate, params,'').pipe(
      tap(
        response => {
          return response;
        },
        error => {
          console.log(error.message);
        }
      )
    )

  }
}
