import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPwgenContainerComponent } from './x-pwgen-container.component';

describe('XPwgenContainerComponent', () => {
  let component: XPwgenContainerComponent;
  let fixture: ComponentFixture<XPwgenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [XPwgenContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XPwgenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
