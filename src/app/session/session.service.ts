import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Usuario from '../usuario/Usuario';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(info: { username: string; password: string }): Observable<Usuario> {
    return this.http.post<Usuario>('api/session', info, this.httpOptions);
  }

  logout() {
    return this.http.delete('api/session/0');
  }

  isLoggedIn(): Observable<Usuario> {
    return this.http.get<Usuario>('api/session');
  }
}
