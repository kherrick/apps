import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XSignatureDetection } from './x-signature-detection';

describe('XSignatureDetection', () => {
  let component: XSignatureDetection;
  let fixture: ComponentFixture<XSignatureDetection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XSignatureDetection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XSignatureDetection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
