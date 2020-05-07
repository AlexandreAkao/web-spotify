import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session/session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private route: Router,
    private ss: SessionService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(form) {
    const inputValues = form.value;

    this.ss
      .login(inputValues)
      .toPromise()
      .then((usuario) => {
        localStorage.setItem('user', JSON.stringify(usuario));
        this.route.navigate(['home']);
      })
      .catch((error) => {
        if (error.status === 401) {
          this.snackBar.open('Email ou senha incorreta', 'Fechar', {
            duration: 2000,
          });
        } else if (error.status === 404) {
          this.snackBar.open('Usuário não encontrado', 'Fechar', {
            duration: 2000,
          });
        }
      });
  }
}
