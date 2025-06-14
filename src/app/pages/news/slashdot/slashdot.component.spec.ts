import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SlashdotComponent } from './slashdot.component';

describe('SlashdotComponent', () => {
  let component: SlashdotComponent;
  let fixture: ComponentFixture<SlashdotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
      imports: [SlashdotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SlashdotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
