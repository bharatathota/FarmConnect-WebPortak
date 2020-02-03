import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ AppUrls } from '../shared/app.constants'; 
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http: HttpClient) { }
 
  public get<T>(url:string, paramData):Observable<T>{
    return this.http.get<T>(AppUrls.baseUrl+url,{params:paramData});
  }
  public post<T>(url:string, body, paramData):Observable<T>{
    return this.http.post<T>(AppUrls.baseUrl+ url,body,{params:paramData});
  }
}