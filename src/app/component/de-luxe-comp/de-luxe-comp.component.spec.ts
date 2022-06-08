import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeLuxeCompComponent } from './de-luxe-comp.component';

describe('DeLuxeCompComponent', () => {
  let component: DeLuxeCompComponent;
  let fixture: ComponentFixture<DeLuxeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeLuxeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeLuxeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
