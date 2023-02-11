import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { XCalculatorComponent } from './x-calculator.component';

describe('XCalculatorComponent', () => {
  let component: XCalculatorComponent;
  let fixture: ComponentFixture<XCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XCalculatorComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(XCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
