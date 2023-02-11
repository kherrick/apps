import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { XEncryptionComponent } from './x-encryption.component';

describe('XEncryptionComponent', () => {
  let component: XEncryptionComponent;
  let fixture: ComponentFixture<XEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XEncryptionComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
