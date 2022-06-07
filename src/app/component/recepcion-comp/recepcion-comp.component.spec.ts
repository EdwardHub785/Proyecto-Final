import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionCompComponent } from './recepcion-comp.component';

describe('RecepcionCompComponent', () => {
  let component: RecepcionCompComponent;
  let fixture: ComponentFixture<RecepcionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcionCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
