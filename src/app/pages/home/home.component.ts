import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'x-home',
  imports: [MatButtonModule, MatCardModule, RouterModule],
  template: `
    <section x-section-cards>
      <mat-card appearance="raised">
        <mat-card-header [routerLink]="'/news'">
          <mat-card-title>
            News <i class="material-icons">newspaper</i>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <a [routerLink]="'/news'">Recent news items</a>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button [routerLink]="'/news'">Go</button>
        </mat-card-actions>
      </mat-card>
      <mat-card appearance="raised">
        <mat-card-header [routerLink]="'/feeds'">
          <mat-card-title>
            Feeds <i class="material-icons">feed</i>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <a [routerLink]="'/feeds'">Posts from various feeds</a>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button [routerLink]="'/feeds'">Go</button>
        </mat-card-actions>
      </mat-card>
      <mat-card appearance="raised">
        <mat-card-header [routerLink]="'/playground'">
          <mat-card-title>
            Playground <i class="material-icons">developer_board</i>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          A <a [routerLink]="'/playground'">playground</a> for ideas and
          experimentation.</mat-card-content
        >
        <mat-card-actions>
          <button mat-button [routerLink]="'/playground'">Go</button>
        </mat-card-actions>
      </mat-card>
      <mat-card appearance="raised">
        <mat-card-header [routerLink]="'/links'">
          <mat-card-title>
            Links <i class="material-icons">share</i>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <a [routerLink]="'/links'">Links</a> to other sites
        </mat-card-content>
        <mat-card-actions>
          <button mat-button [routerLink]="'/links'">Go</button>
        </mat-card-actions>
      </mat-card>
      <mat-card appearance="raised">
        <mat-card-header [routerLink]="'/slides'">
          <mat-card-title>
            Slides <i class="material-icons">slideshow</i>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <a [routerLink]="'/slides'">Slides for presentations</a>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button [routerLink]="'/slides'">Go</button>
        </mat-card-actions>
      </mat-card>
      <mat-card appearance="raised">
        <mat-card-header [routerLink]="'/about'">
          <mat-card-title>
            About <i class="material-icons">help</i>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          What is this all <a [routerLink]="'/about'">about</a>?
        </mat-card-content>
        <mat-card-actions>
          <button mat-button [routerLink]="'/about'">Go</button>
        </mat-card-actions>
      </mat-card>
    </section>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/card/style.css' as card-style;
      @use 'material-design-lite/css/components/button/style.css' as button-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      [x-section-cards] {
        align-items: center;
        color: var(--md-sys-color-on-surface);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        padding: 2rem;

        mat-card {
          height: 100%;
          justify-content: space-between;
          max-width: 25rem;
          min-height: 12.75rem;
          width: 100%;

          mat-card-header {
            align-items: center;
            background-color: var(
              --card-heading-background,
              var(--md-ref-palette-neutral30)
            );
            border-radius: 0.25rem 0.25rem 0 0;
            color: var(--card-heading-color, #fff);
            cursor: pointer;
            display: flex;
            justify-content: space-between;

            &.mat-mdc-card-header {
              padding: 8px 16px;
            }

            .mat-mdc-card-header-text {
              width: 100%;

              mat-card-title {
                align-items: center;
                display: flex;
                flex-direction: row;
                font-size: 1.375rem;
                justify-content: space-between;
                min-height: 1.75rem;
              }
            }
          }

          mat-card-content.mat-mdc-card-content {
            margin: 0;
            min-height: 4.5rem;
            padding: 1rem;
          }

          mat-card-actions {
            justify-content: end;
            margin: 0.5rem;
          }

          a,
          a:link,
          a:focus,
          a:hover,
          a:active,
          a:visited {
            color: var(--md-sys-color-on-surface);
            text-decoration: underline;
          }

          .mat-mdc-button:not(:disabled) {
            --mdc-text-button-label-text-color: var(
              --md-ref-palette-neutral100,
              #fff
            );

            background-color: var(--md-ref-palette-neutral50);
          }
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent {}
