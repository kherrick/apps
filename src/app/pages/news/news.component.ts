import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Observable, firstValueFrom } from 'rxjs';

import { parse, parseFragment, serialize } from 'parse5';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <style>
      [news-summary] {
        margin: auto;
        max-width: 50rem;
        padding: 0 5rem;
      }

      [news-summary] ul {
        margin-top: 0;
      }

      [news-summary] a,
      [news-sources] a,
      [app-section-cards] a {
        text-decoration: underline;
      }

      [news-summary] h2,
      [news-sources] h2 {
        margin-bottom: 0;
        margin-top: 0;
      }

      [news-sources] {
        margin-top: 1rem;
        text-align: center;
      }
    </style>
    <section news-summary [innerHTML]="newsSummary"></section>
    <section news-sources>
      <h1>
        <a href="https://kherrick.github.io/news-summary/">News Summary</a>
      </h1>
      <h2>Sources</h2>
      <p>
        The content above has been machine generated from the sources below.
      </p>
    </section>
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

      [news-summary] {
        margin: auto;
        max-width: 50rem;
        padding: 0 5rem;
      }

      [news-sources] {
        margin-top: 1rem;
        text-align: center;
      }

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

      h1 {
        font-size: 2rem;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NewsComponent implements OnInit {
  private http = inject(HttpClient);

  newsSummary: string = '';
  data: Observable<string> = this.http.get(
    'https://kherrick.github.io/news-summary/index.html',
    {
      responseType: 'text',
    },
  );

  async ngOnInit(): Promise<void> {
    const data = await firstValueFrom(this.data);
    const parsedDoc = parse(data);

    const [htmlDoc] = parsedDoc.childNodes.filter(
      (childNode) => childNode.nodeName === 'html',
    );

    const [bodyNode] = (
      (htmlDoc as unknown as ChildNode).childNodes as unknown as ChildNode[]
    ).filter((childNode) => childNode.nodeName === 'body');

    // create a blank fragment
    const result = parseFragment('');

    // method to push child nodes
    const pushChildNode = (arr: ChildNode[], el: ChildNode) => arr.push(el);

    let index = 0;
    // grab all of the elements up to the horizontal rule
    while (
      index < bodyNode.childNodes.length &&
      bodyNode.childNodes[index].nodeName !== 'hr'
    ) {
      // find and adjust the header value
      if (bodyNode.childNodes[index].nodeName === 'h1') {
        const [anchor] = bodyNode.childNodes[index].childNodes as any;
        const [anchorText] = anchor.childNodes as any;
        const [anchorLink] = anchor.attrs;

        anchorLink.value = 'https://kherrick.github.io/apps/news';
        anchorText.value = 'News';
      }

      pushChildNode(
        result.childNodes as unknown as ChildNode[],
        bodyNode.childNodes[index],
      );

      index = index + 1;
    }

    // push the 'hr' node
    pushChildNode(
      result.childNodes as unknown as ChildNode[],
      bodyNode.childNodes[index],
    );

    try {
      this.newsSummary = serialize(result);
    } catch (error) {}
  }
}
