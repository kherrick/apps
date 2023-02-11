import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { XTopAppBarComponent } from './x-top-app-bar.component';

describe('XTopAppBarComponent', () => {
  let component: XTopAppBarComponent;
  let fixture: ComponentFixture<XTopAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XTopAppBarComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(XTopAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
