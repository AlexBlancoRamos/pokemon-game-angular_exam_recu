import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioRecuBlancoComponent } from './iniciar-sessio-recu-blanco.component';

describe('IniciarSessioRecuBlancoComponent', () => {
  let component: IniciarSessioRecuBlancoComponent;
  let fixture: ComponentFixture<IniciarSessioRecuBlancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioRecuBlancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioRecuBlancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
