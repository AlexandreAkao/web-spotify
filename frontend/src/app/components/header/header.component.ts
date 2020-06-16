import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session/session.service';
import { Router } from '@angular/router';
import { Session } from 'src/app/session/Session';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usuario: Session;
  searchValue = '';
  inputSearch: string;

  constructor(public ss: SessionService, private route: Router) {}

  ngOnInit(): void {}

  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.usuario = user;

      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.ss.logout();
    this.route.navigate(['home']);
  }

  keyPress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.route.navigate(['music'], {
        queryParams: {
          search: this.inputSearch,
        },
      });
    }
  }
}
