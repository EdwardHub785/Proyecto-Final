import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorCompComponent } from './superior-comp.component';

describe('SuperiorCompComponent', () => {
  let component: SuperiorCompComponent;
  let fixture: ComponentFixture<SuperiorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperiorCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
