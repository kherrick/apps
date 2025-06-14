import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { XCalculatorComponent } from './x-calculator.component';

describe('XCalculatorComponent', () => {
  let component: XCalculatorComponent;
  let fixture: ComponentFixture<XCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
      imports: [XCalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
