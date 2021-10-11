import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8111/user/ticket';


@Injectable({
  providedIn: 'root'
})
export class UserbookingserviceService {
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
        })
    };
   public loginCheck: any;

  constructor(private http:HttpClient) { }

  getFlightList(flightlist : any) : Observable<any>{
    return this.http.get<any>(AUTH_API + "/booking/List", this.httpOptions);
  }
}
