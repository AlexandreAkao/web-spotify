import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import Usuario from './Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  BASE_URL = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      `${this.BASE_URL}/users`,
      usuario,
      this.httpOptions
    );
  }

  index(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.BASE_URL}/users`);
  }

  show(i: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.BASE_URL}/users/${i}`);
  }

  update(i: string, info: {}): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.BASE_URL}/users/${i}`, info);
  }
}
