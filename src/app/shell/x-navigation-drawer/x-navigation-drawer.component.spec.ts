import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { XNavigationDrawerComponent } from './x-navigation-drawer.component';

describe('XNavigationDrawerComponent', () => {
  let component: XNavigationDrawerComponent;
  let fixture: ComponentFixture<XNavigationDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XNavigationDrawerComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(XNavigationDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
