import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPeerComponent } from './x-peer.component';

describe('XPeerComponent', () => {
  let component: XPeerComponent;
  let fixture: ComponentFixture<XPeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XPeerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XPeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
