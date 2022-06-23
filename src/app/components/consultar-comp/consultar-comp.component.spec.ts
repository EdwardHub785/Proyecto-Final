import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCompComponent } from './consultar-comp.component';

describe('ConsultarCompComponent', () => {
  let component: ConsultarCompComponent;
  let fixture: ComponentFixture<ConsultarCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
