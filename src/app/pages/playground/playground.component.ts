import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section app-section-cards>
      <div encryption class="card">
        <div [routerLink]="'/playground/encryption'" class="title link">
          Encryption <i class="material-icons">enhanced_encryption</i>
        </div>
        <div class="subtitle">
          <a [routerLink]="'/playground/encryption'">Experiment with Web Crypto API</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/playground/encryption'">Go</button>
        </div>
      </div>
      <div certificates class="card">
        <div [routerLink]="'/playground/certificates'" class="title link">
          Certificates <i class="material-icons">security</i>
        </div>
        <div class="subtitle">
          <a [routerLink]="'/playground/certificates'">Experiment with Certificates</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/playground/certificates'">Go</button>
        </div>
      </div>
      <div calculator class="card">
        <div [routerLink]="'/calculator'" class="title link">
          Calculator <i class="material-icons">calculate</i>
        </div>
        <div class="subtitle">
          <a [routerLink]="'/calculator'">Experiment with Wasm using C#</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/calculator'">Go</button>
        </div>
      </div>
      <div pwgen class="card">
        <div [routerLink]="'/pwgen'" class="title link">
          pwgen <i class="material-icons">password</i>
        </div>
        <div class="subtitle">
          <a [routerLink]="'/pwgen'">Experiment with Wasm using C</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/pwgen'">Go</button>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/card/style.css' as card-style;
      @use 'material-design-lite/css/components/button/style.css' as button-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      [app-section-cards] {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        padding: 2rem;

        a {
          text-decoration: underline;
        }
      }

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

      [encryption] {
        --card-heading-background: #495890;
      }

      [certificates] {
        --card-heading-background: #016765;
      }

      [pwgen] {
        --card-heading-background: #697fce;
      }

      :is(.card) .actions {
        justify-content: end;
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
      }

      :where(.button, button):not(.icon-button, .fab, .chip) {
        background-color: var(--md-ref-palette-neutral50);
        color: var(--md-ref-palette-neutral90);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PlaygroundComponent {}
