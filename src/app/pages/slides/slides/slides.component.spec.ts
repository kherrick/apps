import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SlidesComponent } from './slides.component';

describe('SlidesComponent', () => {
  let component: SlidesComponent;
  let fixture: ComponentFixture<SlidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlidesComponent],
      providers: [provideRouter([])],
    });
    fixture = TestBed.createComponent(SlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
