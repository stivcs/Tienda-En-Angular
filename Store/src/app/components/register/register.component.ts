import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: '',
    fullName: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  register() {
    // Registra al usuario utilizando el servicio UserService
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('Usuario registrado exitosamente');
        this.router.navigate(['welcome']); // Redirige al componente WelcomeComponent
      },
      error => {
        console.error('Error al registrar el usuario:', error);
        // Maneja el error de acuerdo a tus necesidades.
      }
    );
  }
}
