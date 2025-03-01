import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'x-home',
  imports: [CommonModule, RouterModule],
  template: `
    <section x-section-cards>
      <div karlherrick class="card">
        <div [routerLink]="'/feeds/karl-herrick'" class="title link">
          Karl Herrick <i class="material-icons">bolt</i>
        </div>
        <div class="subtitle">
          <a [routerLink]="'/feeds/karl-herrick'">Posts from karlherrick.com</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/feeds/karl-herrick'">Go</button>
        </div>
      </div>
      <div herrickdesign class="card">
        <div [routerLink]="'/feeds/herrick-design'" class="title link">
          Herrick Design <i class="material-icons">palette</i>
        </div>
        <div class="subtitle">
          <a [routerLink]="'/feeds/herrick-design'">
            Posts from herrickdesign.com
          </a>
        </div>
        <div class="actions">
          <button [routerLink]="'/feeds/herrick-design'">Go</button>
        </div>
      </div>
      <div infinitym class="card">
        <div [routerLink]="'/feeds/infinitym'" class="title link">
          InfinityM <i class="material-icons">memory</i>
        </div>
        <div class="subtitle">
          <a [routerLink]="'/feeds/infinitym'">Posts from infinitym.ca</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/feeds/infinitym'">Go</button>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/card/style.css' as card-style;
      @use 'material-design-lite/css/components/button/style.css' as button-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      [x-section-cards] {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        padding: 2rem;

        .card {
          min-height: 12.75rem;
          max-width: 25rem;
          width: 100%;
        }

        .title {
          align-items: center;
          background: var(
            --card-heading-background,
            var(--md-ref-palette-neutral30)
          );
          border-radius: 0.25rem 0.25rem 0 0;
          color: var(--card-heading-color, #fff);
          display: flex;
          justify-content: space-between;
          min-height: 1.75rem;

          &.link {
            text-decoration: none;
          }
        }

        :is(.card) .subtitle {
          min-height: 4.5rem;
          padding: 1rem;
        }

        :is(.card) .actions {
          justify-content: end;
          margin: 0.5rem;
          padding: 0.5rem;
        }

        [karlherrick] {
          --card-heading-background: #495890;
        }

        [herrickdesign] {
          --card-heading-background: #333;
        }

        [infinitym] {
          --card-heading-background: #697fce;
        }

        .link {
          cursor: pointer;
          text-decoration: underline;
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

        :where(.button, button):not(.icon-button, .fab, .chip) {
          background-color: var(--md-ref-palette-neutral50);
          color: var(--md-ref-palette-neutral90);
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FeedsComponent {}
