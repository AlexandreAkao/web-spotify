import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import Usuario from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`api/usuarios`, usuario, this.httpOptions);
  }

  index(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`api/usuarios`);
  }

  login(info: { username: string, password: string }) {
    let usuario: Usuario;

    return this.index().toPromise()
    .then(res => {
      let users = res;

      users = users.filter(item => (item.senha === info.password && (item.username === info.username || item.email === info.username)));

      usuario = users[0]
    })
    .then(() => {
      if (usuario) {
        localStorage.setItem("user", JSON.stringify(usuario));

        return true;
      } else {
        return false;
      }
    })
  }
}
