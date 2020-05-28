import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../session/Session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(info: { username: string; password: string }): Observable<Session> {
    return this.http.post<Session>('api/session', info, this.httpOptions);
  }

  logout() {
    return this.http.delete('api/session');
  }
}