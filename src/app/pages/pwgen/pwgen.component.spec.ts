import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwgenComponent } from './pwgen.component';

describe('PwgenComponent', () => {
  let component: PwgenComponent;
  let fixture: ComponentFixture<PwgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PwgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
