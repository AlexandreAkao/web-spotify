import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session/session.service';
import Usuario from 'src/app/usuario/Usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usuario: Usuario;

  constructor(public ss: SessionService) {}

  ngOnInit(): void {}

  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.usuario = user.user;

      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.ss.logout().subscribe(() => {
      localStorage.removeItem('user');
    });
  }

  show(): void {
    this.ss
      .isLoggedIn()
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }
}
