import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { environment } from '../../../../environments/environment';

// npm run build-feed-infinitym
// consider investigating TransferState:
// https://angular.io/api/platform-browser/TransferState
// https://brianflove.com/2020-06-05/angular-transfer-state/
// https://www.ganatan.com/tutorials/transfer-state-with-angular

// docs: https://developer.wordpress.org/rest-api/reference/posts/
// endpoint: https://infinitym.ca/wp-json/wp/v2/posts?per_page=2

import initialState from './infinitym.json';

interface Post {
  id: number;
  date_gmt: string;
  title: { rendered: string };
  content: { rendered: string };
  link: string;
}

@Component({
  selector: 'x-infinitym',
  imports: [CommonModule, RouterModule],
  template: `
    <div article-container>
      <article *ngFor="let post of posts">
        <h1>
          <a
            href="{{ post.link }}"
            [innerHTML]="trustHtml(post.title.rendered)"
          ></a>
        </h1>
        <h2>{{ post.date_gmt | date: 'medium' }}</h2>
        <p></p>
        <div [innerHTML]="trustHtml(post.content.rendered)"></div>
        <hr />
      </article>
    </div>
  `,
  styles: [
    `
      /* for infinitym */
      [article-container] {
        --x-postpress-article-width: 100%;
        --x-postpress-img-max-width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 0 1rem 0 1rem;

        article {
          font-size: larger;
          max-width: 60rem;
        }

        hr {
          margin: 2rem;
        }

        h1 {
          font-size: larger;
          font-weight: bold;
        }

        /* begin: x-postpress shared styles */
        a,
        a:link,
        a:visited {
          color: var(--x-postpress-a-color);
          text-decoration: var(--x-postpress-a-text-decoration);
        }

        a:hover {
          text-decoration: var(--x-postpress-a-hover-text-decoration);
        }

        a,
        a:link,
        a:visited {
          color: var(--x-postpress-a-color);
          text-decoration: var(--x-postpress-a-text-decoration);
        }

        a:hover {
          text-decoration: var(--x-postpress-a-hover-text-decoration);
        }

        article,
        ::slotted(article) {
          clear: var(--x-postpress-article-clear, inherit);
          margin: var(--x-postpress-article-margin, inherit);
          width: var(--x-postpress-article-width, inherit);
        }

        article .gallery {
          display: var(--x-postpress-article-gallery-display, inherit);
          flex-wrap: wrap;
        }

        article .gallery-item {
          align-items: center;
          display: flex;
          flex-direction: column;
          flex: var(--x-postpress-article-gallery-item-flex, inherit);
          justify-content: flex-start;
          line-height: 1;
          margin: var(--x-postpress-article-gallery-item-margin, inherit);
          padding: var(--x-postpress-article-gallery-item-padding, inherit);
        }

        article .gallery-columns-2 .gallery-item {
          flex-basis: 43.3%;
          padding: 3%;
        }

        article .gallery-columns-3 .gallery-item {
          flex-basis: 23.3%;
          padding: 3%;
        }

        article .gallery-icon {
          padding: 0 0.25rem 0 0.25rem;
        }

        .alignleft {
          float: left;
          margin: 0;
        }

        .alignright {
          float: right;
          margin: 0;
        }

        figure {
          margin: auto;
          padding: 0 0.25rem 1rem 0.25rem;
          text-align: center;
        }

        figure.alignleft {
          padding: 0 1rem 0 0;
        }

        figure > figcaption {
          font-size: smaller;
          margin-top: 1rem;
          min-height: 2rem;
          text-align: center;
        }

        h1 {
          color: var(--x-postpress-h1-color, inherit);
          font-size: var(--x-postpress-h1-font-size, inherit);
          font-weight: var(--x-postpress-h1-font-weight, inherit);
          margin: var(--x-postpress-h1-margin, inherit);
          text-align: var(--x-postpress-h1-text-align, initial);
        }

        h1 a,
        h1 a:visited,
        h1 a:link,
        h1 a:hover {
          text-decoration: none;
        }

        h2 {
          color: var(--x-postpress-h2-color, #777);
          display: var(--x-postpress-h2-display, initial);
          font-size: var(--x-postpress-h2-font-size, smaller);
          text-align: var(--x-postpress-h2-text-align, initial);
        }

        hr {
          clear: var(--x-postpress-hr-clear, both);
          display: var(--x-postpress-hr-display, block);
          margin: var(--x-postpress-hr-margin, initial);
          padding: var(--x-postpress-hr-padding, initial);
        }

        .wp-block-gallery img {
          display: var(--x-postpress-wp-block-gallery-img-display, inherit);
          float: var(--x-postpress-wp-block-gallery-img-float, inherit);
          height: var(--x-postpress-wp-block-gallery-img-height, auto);
          margin: var(--x-postpress-wp-block-gallery-img-margin, inherit);
          max-height: var(
            --x-postpress-wp-block-gallery-img-max-height,
            inherit
          );
          max-width: var(--x-postpress-wp-block-gallery-img-max-width, inherit);
          min-height: var(
            --x-postpress-wp-block-gallery-img-min-height,
            inherit
          );
          min-width: var(--x-postpress-wp-block-gallery-img-min-width, inherit);
          padding: var(--x-postpress-wp-block-gallery-img-padding, inherit);
          width: var(--x-postpress-wp-block-gallery-img-width, auto);
        }

        img {
          display: var(--x-postpress-img-display, inherit);
          float: var(--x-postpress-img-float, inherit);
          height: var(--x-postpress-img-height, auto);
          margin: var(--x-postpress-img-margin, inherit);
          max-height: var(--x-postpress-img-max-height, inherit);
          max-width: var(--x-postpress-img-max-width, inherit);
          min-height: var(--x-postpress-img-min-height, inherit);
          min-width: var(--x-postpress-img-min-width, inherit);
          padding: var(--x-postpress-img-padding, inherit);
          width: var(--x-postpress-img-width, auto);
        }

        ul {
          display: var(--x-postpress-ul-display, inherit);
          list-style-type: var(--x-postpress-ul-list-style-type, inherit);
          margin: var(--x-postpress-ul-margin, inherit);
          padding: var(--x-postpress-ul-padding, inherit);
        }

        li {
          display: var(--x-postpress-li-display, inherit);
          margin: var(--x-postpress-li-margin, inherit);
          padding: var(--x-postpress-li-padding, inherit);
        }

        p {
          clear: var(--x-postpress-p-clear, inherit);
          text-align: var(--x-postpress-p-text-align, inherit);
        }

        pre {
          overflow: auto;
        }

        x-postpress-code {
          margin: 1rem 0;
        }

        #singlePostNavigation,
        #previousPost,
        #nextPost {
          display: flex;
          flex: 1;
          justify-content: space-evenly;
          margin: 0 1.5rem;
          text-align: center;
        }

        #previousPost,
        #nextPost {
          max-width: 33vw;
        }

        #previousPost span,
        #nextPost span {
          display: inline-flex;
        }
        /* end: x-postpress shared styles */
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class InfinitymComponent {
  private httpClient: HttpClient = inject(HttpClient);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  public posts: Post[] = initialState;

  trustHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  constructor() {
    this.httpClient
      .get(`${environment.API_URL_INFINITYM}?per_page=10`)
      .subscribe((posts: any) => {
        this.posts = posts.map(
          (post: Post) =>
            this.posts.find((searchPost: Post) => searchPost.id === post.id) ??
            post,
        );
      });
  }
}
