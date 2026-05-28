import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploSignals } from './exemplo-signals';

describe('ExemploSignals', () => {
  let component: ExemploSignals;
  let fixture: ComponentFixture<ExemploSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
