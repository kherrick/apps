import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPeerSettingsComponent } from './settings.component';

describe('XPeerSettingsComponent', () => {
  let component: XPeerSettingsComponent;
  let fixture: ComponentFixture<XPeerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [XPeerSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XPeerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
