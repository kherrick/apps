import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LobstersComponent } from './lobsters.component';

describe('LobstersComponent', () => {
  let component: LobstersComponent;
  let fixture: ComponentFixture<LobstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
      imports: [LobstersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LobstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
