import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameScore } from '../models/gamescore.model';
import { GameScorePOST } from '../models/gamescore-post.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl = 'http://localhost:5000'; // replace with your Flask backend URL

  constructor(private http: HttpClient) {}

  getTestData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/test`);
  }

  getSudokuScoreBoard(): Observable<any> {
    return this.http.get<GameScore>(`${this.baseUrl}/scoreboard`);
  }

  postSudokuScoreBoard(newScore:GameScorePOST): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/scoreboard`, newScore);
  }
}


