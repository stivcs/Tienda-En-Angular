// Importar las funciones necesarias para las pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importar el componente NotFoundComponent que se va a probar
import { NotFoundComponent } from './notFound.component';
// Describir el componente NotFoundComponent y las pruebas unitarias asociadas
describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  // Configurar el entorno de pruebas antes de cada prueba
  beforeEach(() => {
    // Configurar el módulo de pruebas declarando el componente NotFoundComponent
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    });
    // Crear una instancia del componente y del fixture
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    // Detectar los cambios iniciales en el componente
    fixture.detectChanges();
  });
  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    // Afirmar que el componente se ha creado correctamente
    expect(component).toBeTruthy();
  });
});