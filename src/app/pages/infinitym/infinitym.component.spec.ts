import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitymComponent } from './infinitym.component';

describe('InfinitymComponent', () => {
  let component: InfinitymComponent;
  let fixture: ComponentFixture<InfinitymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InfinitymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfinitymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
