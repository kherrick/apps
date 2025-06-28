import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { XShellComponent } from './x-shell.component';

describe('XShellComponent', () => {
  let component: XShellComponent;
  let fixture: ComponentFixture<XShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        XShellComponent,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
      ],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        { provide: SwUpdate, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(XShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
