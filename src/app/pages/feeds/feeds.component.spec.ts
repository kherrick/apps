import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FeedsComponent } from './feeds.component';

describe('FeedsComponent', () => {
  let component: FeedsComponent;
  let fixture: ComponentFixture<FeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedsComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
