import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavanderiaCompComponent } from './lavanderia-comp.component';

describe('LavanderiaCompComponent', () => {
  let component: LavanderiaCompComponent;
  let fixture: ComponentFixture<LavanderiaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavanderiaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavanderiaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
