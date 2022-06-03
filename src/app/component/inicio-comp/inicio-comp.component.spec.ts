import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCompComponent } from './inicio-comp.component';

describe('InicioCompComponent', () => {
  let component: InicioCompComponent;
  let fixture: ComponentFixture<InicioCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
