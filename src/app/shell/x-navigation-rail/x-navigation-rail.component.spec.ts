import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { XNavigationRailComponent } from './x-navigation-rail.component';

describe('XNavigationRailComponent', () => {
  let component: XNavigationRailComponent;
  let fixture: ComponentFixture<XNavigationRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
      imports: [XNavigationRailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XNavigationRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
