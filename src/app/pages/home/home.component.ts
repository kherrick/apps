import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-container>
      home works!

      <a [routerLink]="'/about'">about</a>
    </ng-container>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent {

}
