import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerrickDesignComponent } from './herrick-design.component';

describe('HerrickDesignComponent', () => {
  let component: HerrickDesignComponent;
  let fixture: ComponentFixture<HerrickDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerrickDesignComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HerrickDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
