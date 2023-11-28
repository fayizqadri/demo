import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showtable2Component } from './showtable2.component';

describe('Showtable2Component', () => {
  let component: Showtable2Component;
  let fixture: ComponentFixture<Showtable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Showtable2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Showtable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
