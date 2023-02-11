import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { XNavigationRailComponent } from './x-navigation-rail.component';

describe('XNavigationRailComponent', () => {
  let component: XNavigationRailComponent;
  let fixture: ComponentFixture<XNavigationRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XNavigationRailComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(XNavigationRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
