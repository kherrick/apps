import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XBackgroundRemoval } from './x-background-removal';

describe('XBackgroundRemoval', () => {
  let component: XBackgroundRemoval;
  let fixture: ComponentFixture<XBackgroundRemoval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XBackgroundRemoval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XBackgroundRemoval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
