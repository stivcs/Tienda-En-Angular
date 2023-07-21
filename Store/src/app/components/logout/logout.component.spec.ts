import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';

// Descripción del componente LogoutComponent y su prueba unitaria
describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  // Configuración inicial antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent]
    });
    // Crear una instancia del componente y del fixture
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    // Detectar los cambios iniciales en el componente
    fixture.detectChanges();
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});