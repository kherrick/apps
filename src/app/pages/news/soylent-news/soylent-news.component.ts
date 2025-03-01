import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { addNewsItems } from '../shared/utilities/add-news-items';
import {
  getArchives,
  getIndex,
  NewsWindow,
  UpdateQueue,
} from '../shared/utilities/state';

import initialState from './soylent-news.json';

@Component({
  selector: 'x-soylent-news',
  imports: [CommonModule, RouterModule],
  template: `
    <div news>
      <h1>
        <a [routerLink]="'/news/soylent-news'">Soylent News</a>
      </h1>
      <section id="latest">
        <h2>Latest</h2>
      </section>
      <section id="archives">
        <h2>
          <a
            href="https://github.com/kherrick/soylent-news/blob/main/archives/index.md"
            >Archives</a
          >
        </h2>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/soylent-news/blob/main/archives/2022/index.md"
              >2022</a
            >
          </h3>
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/soylent-news/blob/main/archives/2023/index.md"
              >2023</a
            >
          </h3>
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/soylent-news/blob/main/archives/2024/index.md"
              >2024</a
            >
          </h3>
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/kherrick/soylent-news/blob/main/archives/2025/index.md"
              >2025</a
            >
          </h3>
        </section>
      </section>
    </div>
  `,
  styleUrls: ['../shared/styles/news.scss'],
  styles: [
    `
      [news] {
        --news-heading-background: linear-gradient(#600, #933);
        width: 100%;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SoylentNewsComponent implements OnInit {
  dataUrl: string =
    'https://raw.githubusercontent.com/kherrick/soylent-news/main/archives/';
  shadowRoot: ShadowRoot;

  constructor(el: ElementRef) {
    this.shadowRoot = el.nativeElement.shadowRoot;
  }

  async ngOnInit(): Promise<void> {
    NewsWindow.newsState = initialState;

    // await getIndex(1, this.shadowRoot); // try for tomorrow
    await getIndex(0, this.shadowRoot, this.dataUrl);
    await getIndex(-1, this.shadowRoot, this.dataUrl);

    const queue = new UpdateQueue(this.shadowRoot);
    const newsState = NewsWindow.newsState;

    addNewsItems(this.shadowRoot, newsState, queue);

    if ('IntersectionObserver' in globalThis) {
      getArchives(this.shadowRoot, newsState, queue, this.dataUrl);

      (this.shadowRoot.querySelector('#latest') as HTMLElement).style.display =
        'block';
      (
        this.shadowRoot.querySelector('#archives') as HTMLElement
      ).style.display = 'block';
    }
  }
}
