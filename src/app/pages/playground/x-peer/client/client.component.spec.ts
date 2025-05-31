import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPeerClientComponent } from './client.component';

describe('XPeerClientComponent', () => {
  let component: XPeerClientComponent;
  let fixture: ComponentFixture<XPeerClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XPeerClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XPeerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
