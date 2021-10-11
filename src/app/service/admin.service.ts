import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private saveFlightURL = "http://localhost:8112/admin/";

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
        })
    };
  constructor(private http: HttpClient) { }

  loginCheck = false;
  saveFlight(data: any) : Observable<any>
  {   

      return this.http.post<any>(this.saveFlightURL+"flightSave", data, this.httpOptions); 
  }

  getFlightList(): Observable<any>
  {
    return this.http.get<any>(this.saveFlightURL+"listFlight", this.httpOptions); 
  }
}
