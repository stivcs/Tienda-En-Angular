import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
// Importamos las dependencias necesarias para las pruebas

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    // Configuramos el entorno de pruebas
    TestBed.configureTestingModule({});
    // Inyectamos el servicio a través del TestBed
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    // Verificamos que el servicio haya sido creado exitosamente
    expect(service).toBeTruthy();
  });
});