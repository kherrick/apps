import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section app-section-cards>
      <div soylentNews class="card">
        <div [routerLink]="'/news/soylent-news'" class="title link">
          Soylent News <i class="material-icons">feed</i>
        </div>
        <div class="subtitle">
          Recent news items from
          <a [routerLink]="'/news/soylent-news'">Soylent News</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/news/soylent-news'">Go</button>
        </div>
      </div>
      <div hackerNews class="card">
        <div [routerLink]="'/news/hacker-news'" class="title link">
          Hacker News <i class="material-icons">feed</i>
        </div>
        <div class="subtitle">
          Recent news items from
          <a [routerLink]="'/news/hacker-news'">Hacker News</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/news/hacker-news'">Go</button>
        </div>
      </div>
      <div slashdot class="card">
        <div [routerLink]="'/news/slashdot'" class="title link">
          Slashdot <i class="material-icons">feed</i>
        </div>
        <div class="subtitle">
          Recent news items from
          <a [routerLink]="'/news/slashdot'">Slashdot</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/news/slashdot'">Go</button>
        </div>
      </div>
      <div lobsters class="card">
        <div [routerLink]="'/news/lobsters'" class="title link">
          Lobsters <i class="material-icons">feed</i>
        </div>
        <div class="subtitle">
          Recent news items from
          <a [routerLink]="'/news/lobsters'">Lobsters</a>
        </div>
        <div class="actions">
          <button [routerLink]="'/news/lobsters'">Go</button>
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
        background: var(--card-heading-background, var(--md-ref-palette-neutral30));
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

      [hackerNews] {
        --card-heading-background: rgb(255, 102, 0);
        --card-heading-color: rgb(25, 25, 25);
      }

      [lobsters] {
        --card-heading-background: linear-gradient(#500, #ac130d);
      }

      [slashdot] {
        --card-heading-background: #016765;
      }

      [soylentNews] {
        --card-heading-background: linear-gradient(#600, #933);
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
export class NewsComponent {}
