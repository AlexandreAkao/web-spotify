import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session/session.service';
import Usuario from 'src/app/usuario/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

    constructor(public ss: SessionService) { }

  ngOnInit(): void {}

  isLogged() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      this.usuario = user.user;

      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.ss.logout().subscribe(
      () => {
        localStorage.removeItem("user");
      }
    );
  }

  show() {
    this.ss.isLoggedIn().toPromise()
    .then(
      res => {
        console.log(res)
      }
    )
  }
}
