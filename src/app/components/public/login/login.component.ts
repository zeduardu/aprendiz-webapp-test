import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  message!: string;
  emailEnviado!: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login() {
    try {
      if (this.email === undefined || this.password === undefined) {
        this.message = 'Os campos usuário e senha não foram preenchidos.';
        return;
      }
      this.authenticationService
        .login(this.email, this.password)
        .then(() => {
          this.router.navigate(['/admin/panel']);
        })
        .catch((erro) => {
          let detalhes = '';
          switch (erro.code) {
            case 'auth/user-not-found': {
              detalhes = 'Não existe usuário para o e-mail informado.';
              break;
            }
            case 'auth/invalid-email': {
              detalhes = 'E-mail inválido.';
              break;
            }
            case 'auth/wrong-password': {
              detalhes = 'Senha inválida.';
              break;
            }
            default: {
              detalhes = erro.message;
              break;
            }
          }
          this.message = `Erro ao logar. ${detalhes}`;
        });
    } catch (error) {
      this.message = `Erro ao logar. Detalhes: ${error}`;
    }
  }

  async linkSend() {
    const { value: email } = await Swal.fire({
      title: 'Por favor, informe o e-mail cadastrado',
      input: 'email',
      inputPlaceholder: 'email'
    });

    if (email) {
      this.authenticationService.resetarSenha(email)
        .then(() => {
          this.emailEnviado = true;
          this.message = `Email enviado para ${email} com instruções para recuperação.`;
        })
        .catch(error => {
          this.message = `Erro ao localizar o email. Detalhes: ${error}`;
        });
    }
  }
}
