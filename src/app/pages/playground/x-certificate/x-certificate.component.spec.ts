import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { XCertificateComponent } from './x-certificate.component';

describe('XCertificateComponent', () => {
  let component: XCertificateComponent;
  let fixture: ComponentFixture<XCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XCertificateComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
