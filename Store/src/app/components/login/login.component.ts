import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { parseJwt } from '../../helpers/jwt.helper';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Router } from '@angular/router';

//Sse utiliza para decorar una clase y definir un componente. Proporciona metadatos que describen cómo se debe comportar y presentar el componente.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private localStorageService: LocalStorageService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response && response.token) {
          let tokenDsencripted = parseJwt(response.token);
          this.localStorageService.setItem('token', tokenDsencripted);
          this.router.navigate(['']);
        } else {
          // Manejar el caso en el que no se reciba un token en la respuesta
          alert("Error al iniciar sesión, las credenciales no coinciden");
        }
      },
      error => {
        
        console.error(error);
      }
    );
  }
}
