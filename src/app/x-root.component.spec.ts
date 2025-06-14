import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { XRootComponent } from './x-root.component';

describe('XRootComponent', () => {
  let component: XRootComponent;
  let fixture: ComponentFixture<XRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XRootComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        { provide: SwUpdate, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(XRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
