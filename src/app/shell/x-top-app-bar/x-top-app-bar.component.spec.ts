import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { XTopAppBarComponent } from './x-top-app-bar.component';

describe('XTopAppBarComponent', () => {
  let component: XTopAppBarComponent;
  let fixture: ComponentFixture<XTopAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
      imports: [XTopAppBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XTopAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
