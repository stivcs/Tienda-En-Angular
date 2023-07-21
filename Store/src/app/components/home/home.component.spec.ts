import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    // Crear una instancia del componente y del fixture
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // Detectar los cambios iniciales en el componente
    fixture.detectChanges();
  });
  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
