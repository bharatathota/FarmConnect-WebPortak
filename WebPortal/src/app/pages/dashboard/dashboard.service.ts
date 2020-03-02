import { Injectable } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public fetchCategoriesList = 'categories';
  constructor(private httpService: HttpCallsService) { }

  getDocumentListByCategory(): Observable<any> {
    return this.httpService.get<any>(this.fetchCategoriesList, {}).pipe(
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
