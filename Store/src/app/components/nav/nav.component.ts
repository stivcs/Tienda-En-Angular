//Se importa @component de angular.
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

//Se crea el componente de angular.
@Component({
  //Se definen las propiedades del componente.
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
//Se exporta la clase del componente.
export class NavComponent {

  public isLoggedIn: boolean = false;
  public isLoggedInAdmin: boolean = false;
  public showNavbar:boolean = false; //Se crea un bool para el navbar.
  public logo:string = '../../../assets/nav/img/koaj.png'; //Se crea una variable para el logo.
  public username:string = ''

  constructor(private localStorageService : LocalStorageService){}

  //Función para mostrar el navbar responsive.
  public toggleNavbar(): void {
    //Se define valor a mostrar: solo true o false.
    this.showNavbar = !this.showNavbar;
    //Mostrar en consola el valor seleccionado.
    console.log(this.showNavbar);
  }

  public logoutPress(): void {
    this.localStorageService.removeItem('token');
  }

  ngOnInit(): void {
    const token = this.localStorageService.getItem('token');
    if (token){
      this.isLoggedIn = true;
      if (token.user.role == 'admin'){
        this.isLoggedInAdmin = true;
      }
      this.username = ` ${token.user.username}`
    }
  }

}
