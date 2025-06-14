import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { XNavigationDrawerComponent } from './x-navigation-drawer.component';

describe('XNavigationDrawerComponent', () => {
  let component: XNavigationDrawerComponent;
  let fixture: ComponentFixture<XNavigationDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
      imports: [XNavigationDrawerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XNavigationDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
