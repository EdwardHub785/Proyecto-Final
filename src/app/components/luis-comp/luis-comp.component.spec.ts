import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuisCompComponent } from './luis-comp.component';

describe('LuisCompComponent', () => {
  let component: LuisCompComponent;
  let fixture: ComponentFixture<LuisCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuisCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuisCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
