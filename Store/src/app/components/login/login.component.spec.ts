import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

 // Se describe el componente LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
   // Se ejecuta antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
     // Se crea una instancia del componente y se detectan los cambios
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   // Se realiza la prueba de que el componente se haya creado exitosamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});