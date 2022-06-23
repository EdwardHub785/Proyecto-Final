import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasioCompComponent } from './gimnasio-comp.component';

describe('GimnasioCompComponent', () => {
  let component: GimnasioCompComponent;
  let fixture: ComponentFixture<GimnasioCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GimnasioCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GimnasioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
