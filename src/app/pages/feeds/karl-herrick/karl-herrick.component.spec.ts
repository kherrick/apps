import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarlHerrickComponent } from './karl-herrick.component';

describe('KarlHerrickComponent', () => {
  let component: KarlHerrickComponent;
  let fixture: ComponentFixture<KarlHerrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarlHerrickComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(KarlHerrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
