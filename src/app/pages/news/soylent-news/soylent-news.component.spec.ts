import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SoylentNewsComponent } from './soylent-news.component';

describe('SoylentNewsComponent', () => {
  let component: SoylentNewsComponent;
  let fixture: ComponentFixture<SoylentNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoylentNewsComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SoylentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
