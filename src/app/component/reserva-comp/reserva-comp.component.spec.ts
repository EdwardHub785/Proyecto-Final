import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCompComponent } from './reserva-comp.component';

describe('ReservaCompComponent', () => {
  let component: ReservaCompComponent;
  let fixture: ComponentFixture<ReservaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
