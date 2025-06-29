import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCanvasImageManipulation } from './x-canvas-image-manipulation';

describe('XCanvasImageManipulation', () => {
  let component: XCanvasImageManipulation;
  let fixture: ComponentFixture<XCanvasImageManipulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XCanvasImageManipulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XCanvasImageManipulation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
