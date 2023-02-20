import { TestBed } from '@angular/core/testing';

import { CalculoServiceService } from './calculo-service.service';

describe('CalculoServiceService', () => {
  let service: CalculoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoServiceService);
  });

  it('Debe de crearse',()=>{
    expect(service).toBeTruthy(); 
  });


  it('Revisar operación seria', () => {
    const numero= service.serie(4);
    expect(numero).toMatch(/\[0-9]/); 
  });

  it('Revisar operación fibonacci', () => {
    const numero= service.fibonacci(4);
    expect(numero).toMatch(/\[0-9]/); 
  });

  it('Revisar operación triangular', () => {
    const numero= service.triangular(4);
    expect(numero).toMatch(/\[0-9]/); 
  });

  it('Revisar operación primo', () => {
    const numero= service.primo(4);
    expect(numero).toMatch(/\[0-9]/); 
  });
});
