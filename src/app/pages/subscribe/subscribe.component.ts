import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import Usuario from 'src/app/usuario/Usuario';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private us: UsuarioService, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      email: ['', Validators.required],
      email_confirmation: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      name: ['', Validators.required],
      day: [0, Validators.required],
      month: [0, Validators.required],
      year: [0, Validators.required],
      gender: ['', Validators.required]
    });
  }

  submitUser(form) {
    const inputValue = form.value;

    if (inputValue.email !== "" && inputValue.email !== inputValue.email_confirmation) {
      this.snackBar.open("Email não coincidem", "Fechar", {
        duration: 2000,
      })

      return;
    }

    if (inputValue.password !== "" && inputValue.password !== inputValue.password_confirmation) {
      this.snackBar.open("Senha não coincidem", "Fechar", {
        duration: 2000,
      })

      return;
    }

    if (form.invalid) {
      this.snackBar.open("Preencha todos os campos", "Fechar", {
        duration: 2000,
      })

      return;
    }

    if (inputValue.day === 0 || inputValue.month === 0 || inputValue.year === 0) {
      this.snackBar.open("Preencha a data de aniversário", "Fechar", {
        duration: 2000,
      })

      return;
    }

    this.snackBar.open("Usuário criado com sucesso", "Fechar", {
      duration: 2000,
    })

    let size;

    this.us.index()
      .subscribe(resp => {
        size = resp.length;
        console.log(size)
        console.log(resp)
      })

    this.us.create({
      id: size,
      username: inputValue.name,
      email: inputValue.email,
      senha: inputValue.password,
      dataDeNascimento: new Date(inputValue.year, inputValue.month, inputValue.day),
      sexo: inputValue.gender
    } as Usuario).subscribe(resp => { console.log(resp) })

  }
}
