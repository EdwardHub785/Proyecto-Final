import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestautanteCompComponent } from './restautante-comp.component';

describe('RestautanteCompComponent', () => {
  let component: RestautanteCompComponent;
  let fixture: ComponentFixture<RestautanteCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestautanteCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestautanteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
