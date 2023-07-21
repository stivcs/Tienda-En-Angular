import { Component, OnInit } from '@angular/core';

//Componente que representa la página "Acerca de".
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() { }

  // Método que se ejecuta al inicializar el componente.
  ngOnInit(): void {}
}