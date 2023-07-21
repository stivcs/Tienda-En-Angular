import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductComponent]
    });

    // Crear una instancia del componente y del fixture
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;

    // Detectar los cambios iniciales en el componente
    fixture.detectChanges();
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});