import { Injectable } from '@angular/core';
import Usuario from './Usuario';
import UsuarioMock from './UsuarioMock';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  create(usuario: Usuario) {
    UsuarioMock.push(usuario);
  }
}
