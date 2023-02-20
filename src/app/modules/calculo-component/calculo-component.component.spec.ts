import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoComponentComponent } from './calculo-component.component';

describe('CalculoComponentComponent', () => {
  let component: CalculoComponentComponent;
  let fixture: ComponentFixture<CalculoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
