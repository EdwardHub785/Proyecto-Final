import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortCompComponent } from './comfort-comp.component';

describe('ComfortCompComponent', () => {
  let component: ComfortCompComponent;
  let fixture: ComponentFixture<ComfortCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfortCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfortCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
