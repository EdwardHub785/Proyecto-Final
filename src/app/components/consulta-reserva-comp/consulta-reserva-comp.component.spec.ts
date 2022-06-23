import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaReservaCompComponent } from './consulta-reserva-comp.component';

describe('ConsultaReservaCompComponent', () => {
  let component: ConsultaReservaCompComponent;
  let fixture: ComponentFixture<ConsultaReservaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaReservaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaReservaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
