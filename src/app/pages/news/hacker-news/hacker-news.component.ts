import { CommonModule } from '@angular/common';

import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { RouterModule } from '@angular/router';

import { addNewsItems } from './utilities/add-news-items';

import {
  getArchives,
  getIndex,
  hackerNewsWindow,
  UpdateQueue,
} from './utilities/state';

import initialState from './hacker-news.json';

@Component({
  selector: 'app-hacker-news',
  imports: [CommonModule, RouterModule],
  template: `
    <div news>
      <h1>
        <a [routerLink]="'/news/hacker-news'">Hacker News</a>
      </h1>
      <section id="latest">
        <h2>Latest</h2>
      </section>
      <section id="archives">
        <h2>
          <a
            href="https://github.com/kherrick/hacker-news/blob/main/archives/index.md"
          >
            Archives
          </a>
        </h2>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/hacker-news/blob/main/archives/2022/index.md"
            >
              2022
            </a>
          </h3>
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/hacker-news/blob/main/archives/2023/index.md"
            >
              2023
            </a>
          </h3>
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/hacker-news/blob/main/archives/2024/index.md"
            >
              2024
            </a>
          </h3>
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/hacker-news/blob/main/archives/2025/index.md"
            >
              2025
            </a>
          </h3>
        </section>
      </section>
    </div>
  `,
  styles: [
    `
      [news] {
        --news-heading-background: rgb(255, 102, 0);
        width: 100%;
      }

      body {
        color: var(--md-sys-color-on-surface);
        font-family: Verdana, Geneva, sans-serif;
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      a:link,
      a:focus,
      a:hover,
      a:active {
        color: var(--md-sys-color-tertiary);
      }

      a:visited {
        color: var(--md-sys-color-on-surface);
      }

      h1 {
        background: var(--news-heading-background, #000);
        margin: 0;
        padding: 1rem;
      }

      h1 > a,
      h1 > a:link,
      h1 > a:focus,
      h1 > a:hover,
      h1 > a:active,
      h1 > a:visited {
        color: var(--md-sys-color-on-surface);
      }

      h2,
      h2 > a,
      h2 > a:link,
      h2 > a:focus,
      h2 > a:hover,
      h2 > a:active,
      h2 > a:visited {
        color: var(--md-ref-palette-neutral95);
      }

      h2 {
        background-color: var(--md-ref-palette-neutral50);
        margin: 1rem 0;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
      }

      #archives {
        display: none;
      }

      #latest > section,
      #archives > section {
        margin: 0 1rem 1rem 1rem;
        padding-bottom: 1rem;
      }

      #latest > section:not(:last-child),
      #archives > section:not(:last-child) {
        border-bottom: 1px dotted var(--md-sys-color-secondary);
      }

      section > h3 {
        margin: 0 0 0.5rem 0;
      }

      section > h4 {
        font-weight: normal;
        margin: 0 0 0 1rem;
      }

      .descendants-container,
      .points-container {
        align-items: center;
        border-left: 1px solid #333;
        display: inline-flex;
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        text-align: center;
      }

      .points {
        align-items: center;
        display: inline-flex;
        height: 1rem;
        margin-left: 1ch;
        min-width: 3ch;
      }

      .text {
        line-height: 1.5rem;
        margin: 1rem 1rem 0 1rem;
        overflow: auto;
      }

      .text > p:first-child {
        margin-top: 1rem;
      }

      .text > p:last-child {
        margin-bottom: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HackerNewsComponent implements OnInit {
  shadowRoot: ShadowRoot;

  constructor(el: ElementRef) {
    this.shadowRoot = el.nativeElement.shadowRoot;
  }

  async ngOnInit(): Promise<void> {
    hackerNewsWindow.hackerNewsState = initialState;

    // await getIndex(1, this.shadowRoot); // try for tomorrow
    await getIndex(0, this.shadowRoot);
    await getIndex(-1, this.shadowRoot);

    const queue = new UpdateQueue(this.shadowRoot);
    const hackerNewsState = hackerNewsWindow.hackerNewsState;

    addNewsItems(this.shadowRoot, hackerNewsState, queue);

    if ('IntersectionObserver' in globalThis) {
      getArchives(this.shadowRoot, hackerNewsState, queue);

      (this.shadowRoot.querySelector('#latest') as HTMLElement).style.display =
        'block';
      (
        this.shadowRoot.querySelector('#archives') as HTMLElement
      ).style.display = 'block';
    }
  }
}
