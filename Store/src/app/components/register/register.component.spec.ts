import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
// Importamos las dependencias necesarias para las pruebas
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    // Configuramos el entorno de pruebas
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    });
    // Creamos una instancia del componente y un fixture para realizar las pruebas
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    // Detectamos los cambios en el componente
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verificamos que el componente haya sido creado exitosamente
    expect(component).toBeTruthy();
  });
}); 
