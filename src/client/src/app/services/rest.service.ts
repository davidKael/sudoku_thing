import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl = 'http://localhost:5000'; // replace with your Flask backend URL

  constructor(private http: HttpClient) {}

  getTestData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/test`);
  }
}


