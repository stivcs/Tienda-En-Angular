//Se importa componentes de angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';

//Se importa el componente del nav
import { NavComponent } from './nav.component';

//Se describe el componente.
describe('NavComponent', () => {
  //Se crea una variable para el componente.
  let component: NavComponent;
  //Se crea una variable para el fixture.
  let fixture: ComponentFixture<NavComponent>;

  //Se crea una función para el componente.
  beforeEach(() => {
    //Se configura el componente.
    TestBed.configureTestingModule({
      // Se declaran los componentes.
      declarations: [NavComponent]
    });
    // Se crea una instancia para el fixture.
    fixture = TestBed.createComponent(NavComponent);
    // Se crea una instancia para el componente.
    component = fixture.componentInstance;
    // Se detectan los cambios.
    fixture.detectChanges();
  });

  //Se crea una prueba para el componente.
  it('should create', () => {
    //Se espera que el componente se cree.
    expect(component).toBeTruthy();
  });
});
