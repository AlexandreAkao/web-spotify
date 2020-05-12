import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/usuario/Usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: Usuario;
  edited = false;
  updatedForm: FormGroup;
  changePassword = false;

  constructor(
    private fb: FormBuilder,
    private us: UsuarioService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  createForm() {
    const date = new Date(this.user.dataDeNascimento);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    this.updatedForm = this.fb.group({
      username: [this.user.username, Validators.required],
      email: [this.user.email, Validators.required],
      changePassword: this.changePassword,
      old_password: [null],
      password: [null],
      password_confirmation: [null],
      day: [day, Validators.required],
      month: [month, Validators.required],
      year: [year, Validators.required],
      gender: [this.user.sexo, Validators.required],
    });
  }

  ngOnInit(): void {
    let session = JSON.parse(localStorage.getItem('user'));

    this.us.show(session.user.id).subscribe((usuario) => {
      this.user = usuario;
      this.createForm();
    });
  }

  editable(flag: boolean): void {
    this.edited = flag;
  }

  updateUser(form: FormGroup) {
    let value = form.value;

    if (form.status === 'VALID') {
      // if (value.old_password !== this.user.senha)

      if (value.password !== value.password_confirmation) {
        return this.snackBar.open('Senhas diferentes', 'Fechar', {
          duration: 2000,
        });
      }

      const updateUser = {
        id: this.user.id,
        username: value.username,
        email: value.email,
        senha: value.changePassword ? value.password : this.user.senha,
        sexo: value.gender,
        dataDeNascimento: new Date(value.year, value.month, value.day),
      };

      this.route.navigate(['home']);

      this.us.update(this.user.id, updateUser).subscribe((res) => {
        const { id, username, email } = updateUser;
        localStorage.setItem(
          'user',
          JSON.stringify({
            user: {
              id,
              username,
              email,
            },
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          })
        );
      });
    } else {
      this.snackBar.open('Preencha todos os campos', 'Fechar', {
        duration: 2000,
      });
    }
  }

  passwordChangeFlag(flag) {
    this.changePassword = flag;
  }
}
