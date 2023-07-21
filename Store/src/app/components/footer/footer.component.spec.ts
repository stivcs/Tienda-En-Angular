import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    // Crear una instancia del componente y del fixture
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    // Detectar los cambios iniciales en el componente
    fixture.detectChanges();
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});