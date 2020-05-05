import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private us: UsuarioService, private fb: FormBuilder, private snackBar: MatSnackBar, private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(form) {
    const inputValues = form.value;

    this.us.login(inputValues)
    .then(res => {
      if (res) {
        this.route.navigate(["home"])
      } else {
        this.snackBar.open("Email ou senha incorreta ou usuário não encontrado", "Fechar", {
          duration: 2000,
        })
      }
    })
  }
}
