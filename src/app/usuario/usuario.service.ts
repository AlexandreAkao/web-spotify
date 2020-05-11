import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import Usuario from './Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`api/usuarios`, usuario, this.httpOptions);
  }

  index(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`api/usuarios`);
  }

  show(i: Number): Observable<Usuario> {
    return this.http.get<Usuario>(`api/usuarios/${i}`);
  }

  update(i: Number, info: {}): Observable<Usuario> {
    return this.http.put<Usuario>(`api/usuarios/${i}`, info);
  }
}
