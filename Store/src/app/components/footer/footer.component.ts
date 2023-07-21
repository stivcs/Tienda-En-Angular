import { Component } from '@angular/core'; //Se importa el component para poder usar la notacion @component y decorar una clase de ts

//Se crea una interfaz para los desarrolladores
interface Developer {
  name: string;//Se crea un atributo nombre
  github: string;//Se crea un atributo github
}

//Se crea un arreglo de desarrolladores
const developers: Developer[] = [//Se crea un arreglo de tipo Developer

  {name:"Cindy Marcela Jiménez Saldarriaga", github:"https://github.com/C1ndyJS"},
  {name:"Julian Andres Corral Gomez", github:"https://github.com/JulianCorralG"},
  {name:"Santiago Jaramillo Duque", github:"https://github.com/santiagoaramillo"},
  {name:"Adrián Fernando Gaitán Londoño", github:"https://github.com/adriancho91s"},
  {name:"Juan Manuel Morales Santacruz", github:"https://github.com/jmorales284"},
  {name:"Daniel Toro soto", github:"https://github.com/pausa11"},
  {name:"Jefferson David Arteaga Bedoya", github:"https://github.com/JeffersonArteaga"},
  {name:"Juan Diego Rincon Franco", github:"https://github.com/Di3go0-0"},
  {name:"Brayan Cataño Giraldo", github:"https://github.com/brayangiraldo02"},
  {name:"Stiven Castro Soto", github:"https://github.com/stivcs"},
  {name:"Julian David Bolivar Agudelo", github:"https://github.com/davidbolivar12"},
  {name:"Juan David Garcia Arce", github:"https://github.com/Juandagarc"},
  {name:"Juan David Gañan Marin", github:"https://github.com/JuanDavidGanan"},
];

//Se crea el componente
@Component({//Se crea el decorador
  selector: 'app-footer',//Se crea el selector
  templateUrl: './footer.component.html',//Se crea el template
  styleUrls: ['./footer.component.css']//Se crea el style
})

//Se exporta la clase
export class FooterComponent {//Se crea la clase
  developers: Developer[] = developers;//Se crea un atributo de tipo Developer
  currentYear: number = 2023//Se crea un atributo de tipo number
}
