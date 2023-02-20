import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoComponentComponent } from './calculo-component.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CalculoComponentComponent', () => {
  let component: CalculoComponentComponent;
  let fixture: ComponentFixture<CalculoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoComponentComponent ,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe exister el Componente', () => {  
    const fixture = TestBed.createComponent(CalculoComponentComponent);
    const app =fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar un formulario valido', () => {  
    const fixture = TestBed.createComponent(CalculoComponentComponent);
    const app =fixture.componentInstance;
    fixture.detectChanges()

    const numero = app.formnum.controls['numero'];
    numero.setValue('4');

    expect(app.formnum.valid).toBeTrue();
  });
});
