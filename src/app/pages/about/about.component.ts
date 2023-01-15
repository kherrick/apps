import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-container>
      about works!

      <a [routerLink]="'/'">home</a>
    </ng-container>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AboutComponent {

}
