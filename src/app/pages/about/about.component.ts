import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';

// first from environment.API_URL
const initialState = [
  {
    id: 3425,
    date: '2023-01-07T04:35:01',
    date_gmt: '2023-01-07T04:35:01',
    guid: { rendered: 'https://herrickdesign.com/?p=3425' },
    modified: '2023-01-07T23:58:20',
    modified_gmt: '2023-01-07T23:58:20',
    slug: 'ice-crystals',
    status: 'publish',
    type: 'post',
    link: 'https://herrickdesign.com/blog/2023/01/07/ice-crystals/',
    title: { rendered: 'Ice Crystals' },
    content: {
      rendered:
        '\n<figure class="wp-block-image size-full"><a href="https://herrickdesign.com/?attachment_id=3426"><img loading="lazy" width="1000" height="563" src="https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Nellie-Cabin.jpg" alt="" class="wp-image-3426" srcset="https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Nellie-Cabin.jpg 1000w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Nellie-Cabin-570x321.jpg 570w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Nellie-Cabin-768x432.jpg 768w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Nellie-Cabin-426x240.jpg 426w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Nellie-Cabin-500x282.jpg 500w" sizes="(max-width: 1000px) 100vw, 1000px" /></a><figcaption>Nellie Log Cabin</figcaption></figure>\n\n\n\n<blockquote class="wp-block-quote"><p>From the breath of God ice is made, and the expanse of the waters is frozen.</p><cite>Job 37:10</cite></blockquote>\n\n\n\n<p></p>\n\n\n\n<figure class="wp-block-image size-full"><a href="https://herrickdesign.com/?attachment_id=3427"><img loading="lazy" width="1000" height="563" src="https://herrickdesign.com/wp-content/uploads/2023/01/Manitou-Frosty-Sunrise.jpg" alt="" class="wp-image-3427" srcset="https://herrickdesign.com/wp-content/uploads/2023/01/Manitou-Frosty-Sunrise.jpg 1000w, https://herrickdesign.com/wp-content/uploads/2023/01/Manitou-Frosty-Sunrise-570x321.jpg 570w, https://herrickdesign.com/wp-content/uploads/2023/01/Manitou-Frosty-Sunrise-768x432.jpg 768w, https://herrickdesign.com/wp-content/uploads/2023/01/Manitou-Frosty-Sunrise-426x240.jpg 426w, https://herrickdesign.com/wp-content/uploads/2023/01/Manitou-Frosty-Sunrise-500x282.jpg 500w" sizes="(max-width: 1000px) 100vw, 1000px" /></a><figcaption>Manitou Water Tower</figcaption></figure>\n\n\n\n<p>I recently learned that there are four different kinds of frost, each with it&#8217;s own way it forms. They go by names such as radiation or hoarfrost, advection frost, window frost, and rime frost. I guess I had never considered that there was more than one kind. No matter what you want to call it, it&#8217;s absolutely beautiful against the bright blue sky.</p>\n\n\n\n<figure class="wp-block-image size-full"><a href="https://herrickdesign.com/?attachment_id=3428"><img loading="lazy" width="1000" height="562" src="https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Creek.jpg" alt="" class="wp-image-3428" srcset="https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Creek.jpg 1000w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Creek-570x320.jpg 570w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Creek-768x432.jpg 768w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Creek-427x240.jpg 427w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Creek-500x281.jpg 500w" sizes="(max-width: 1000px) 100vw, 1000px" /></a></figure>\n\n\n\n<figure class="wp-block-image size-full"><a href="https://herrickdesign.com/?attachment_id=3429"><img loading="lazy" width="1000" height="563" src="https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Tops.jpg" alt="" class="wp-image-3429" srcset="https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Tops.jpg 1000w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Tops-570x321.jpg 570w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Tops-768x432.jpg 768w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Tops-426x240.jpg 426w, https://herrickdesign.com/wp-content/uploads/2023/01/Frosty-Tops-500x282.jpg 500w" sizes="(max-width: 1000px) 100vw, 1000px" /></a></figure>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>From the breath of God ice is made, and the expanse of the waters is frozen. Job 37:10 I recently learned that there are four different kinds of frost, each with it&#8217;s own way it forms. They go by names &hellip; <a href="https://herrickdesign.com/blog/2023/01/07/ice-crystals/">Continue reading <span class="meta-nav">&rarr;</span></a></p>\n',
      protected: false,
    },
    author: 6,
    featured_media: 0,
    comment_status: 'closed',
    ping_status: 'closed',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [10, 21],
    tags: [52, 130, 45, 71, 46, 109, 44],
    yoast_head:
      '<!-- This site is optimized with the Yoast SEO plugin v19.5.1 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Herrick Design - Ice Crystals</title>\n<meta name="description" content="Herrick Design features posts and pages showcasing work by Denise Herrick." />\n<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />\n<link rel="canonical" href="https://herrickdesign.com/blog/2023/01/07/ice-crystals/" />\n<meta name="twitter:label1" content="Written by" />\n\t<meta name="twitter:data1" content="Denise Herrick" />\n\t<meta name="twitter:label2" content="Est. reading time" />\n\t<meta name="twitter:data2" content="2 minutes" />\n<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Article","@id":"https://herrickdesign.com/blog/2023/01/07/ice-crystals/#article","isPartOf":{"@id":"https://herrickdesign.com/blog/2023/01/07/ice-crystals/"},"author":{"name":"Denise Herrick","@id":"https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5"},"headline":"Ice Crystals","datePublished":"2023-01-07T04:35:01+00:00","dateModified":"2023-01-07T23:58:20+00:00","mainEntityOfPage":{"@id":"https://herrickdesign.com/blog/2023/01/07/ice-crystals/"},"wordCount":88,"publisher":{"@id":"https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5"},"keywords":["blue","frost","landscape","rural","snow","sunrise","winter"],"articleSection":["Landscapes","Photography"],"inLanguage":"en-US"},{"@type":"WebPage","@id":"https://herrickdesign.com/blog/2023/01/07/ice-crystals/","url":"https://herrickdesign.com/blog/2023/01/07/ice-crystals/","name":"Herrick Design - Ice Crystals","isPartOf":{"@id":"https://herrickdesign.com/#website"},"datePublished":"2023-01-07T04:35:01+00:00","dateModified":"2023-01-07T23:58:20+00:00","description":"Herrick Design features posts and pages showcasing work by Denise Herrick.","breadcrumb":{"@id":"https://herrickdesign.com/blog/2023/01/07/ice-crystals/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://herrickdesign.com/blog/2023/01/07/ice-crystals/"]}]},{"@type":"BreadcrumbList","@id":"https://herrickdesign.com/blog/2023/01/07/ice-crystals/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Ice Crystals"}]},{"@type":"WebSite","@id":"https://herrickdesign.com/#website","url":"https://herrickdesign.com/","name":"Herrick Design","description":"&quot;Which of my photographs is my favorite? The one I\u2019m going to take tomorrow.&quot; -Imogen Cunningham","publisher":{"@id":"https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://herrickdesign.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":["Person","Organization"],"@id":"https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5","name":"Denise Herrick","image":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://herrickdesign.com/#/schema/person/image/","url":"https://secure.gravatar.com/avatar/36774511e8a79af5a9c814a75a4dc65e?s=96&d=mm&r=g","contentUrl":"https://secure.gravatar.com/avatar/36774511e8a79af5a9c814a75a4dc65e?s=96&d=mm&r=g","caption":"Denise Herrick"},"logo":{"@id":"https://herrickdesign.com/#/schema/person/image/"},"url":"https://herrickdesign.com/blog/author/denise/"}]}</script>\n<!-- / Yoast SEO plugin. -->',
    yoast_head_json: {
      title: 'Herrick Design - Ice Crystals',
      description:
        'Herrick Design features posts and pages showcasing work by Denise Herrick.',
      robots: {
        index: 'index',
        follow: 'follow',
        'max-snippet': 'max-snippet:-1',
        'max-image-preview': 'max-image-preview:large',
        'max-video-preview': 'max-video-preview:-1',
      },
      canonical: 'https://herrickdesign.com/blog/2023/01/07/ice-crystals/',
      twitter_misc: {
        'Written by': 'Denise Herrick',
        'Est. reading time': '2 minutes',
      },
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            '@id':
              'https://herrickdesign.com/blog/2023/01/07/ice-crystals/#article',
            isPartOf: {
              '@id': 'https://herrickdesign.com/blog/2023/01/07/ice-crystals/',
            },
            author: {
              name: 'Denise Herrick',
              '@id':
                'https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5',
            },
            headline: 'Ice Crystals',
            datePublished: '2023-01-07T04:35:01+00:00',
            dateModified: '2023-01-07T23:58:20+00:00',
            mainEntityOfPage: {
              '@id': 'https://herrickdesign.com/blog/2023/01/07/ice-crystals/',
            },
            wordCount: 88,
            publisher: {
              '@id':
                'https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5',
            },
            keywords: [
              'blue',
              'frost',
              'landscape',
              'rural',
              'snow',
              'sunrise',
              'winter',
            ],
            articleSection: ['Landscapes', 'Photography'],
            inLanguage: 'en-US',
          },
          {
            '@type': 'WebPage',
            '@id': 'https://herrickdesign.com/blog/2023/01/07/ice-crystals/',
            url: 'https://herrickdesign.com/blog/2023/01/07/ice-crystals/',
            name: 'Herrick Design - Ice Crystals',
            isPartOf: { '@id': 'https://herrickdesign.com/#website' },
            datePublished: '2023-01-07T04:35:01+00:00',
            dateModified: '2023-01-07T23:58:20+00:00',
            description:
              'Herrick Design features posts and pages showcasing work by Denise Herrick.',
            breadcrumb: {
              '@id':
                'https://herrickdesign.com/blog/2023/01/07/ice-crystals/#breadcrumb',
            },
            inLanguage: 'en-US',
            potentialAction: [
              {
                '@type': 'ReadAction',
                target: [
                  'https://herrickdesign.com/blog/2023/01/07/ice-crystals/',
                ],
              },
            ],
          },
          {
            '@type': 'BreadcrumbList',
            '@id':
              'https://herrickdesign.com/blog/2023/01/07/ice-crystals/#breadcrumb',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Ice Crystals' },
            ],
          },
          {
            '@type': 'WebSite',
            '@id': 'https://herrickdesign.com/#website',
            url: 'https://herrickdesign.com/',
            name: 'Herrick Design',
            description:
              '&quot;Which of my photographs is my favorite? The one I\u2019m going to take tomorrow.&quot; -Imogen Cunningham',
            publisher: {
              '@id':
                'https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5',
            },
            potentialAction: [
              {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://herrickdesign.com/?s={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            ],
            inLanguage: 'en-US',
          },
          {
            '@type': ['Person', 'Organization'],
            '@id':
              'https://herrickdesign.com/#/schema/person/84b8fe666eb9e464cb053988ac4c16b5',
            name: 'Denise Herrick',
            image: {
              '@type': 'ImageObject',
              inLanguage: 'en-US',
              '@id': 'https://herrickdesign.com/#/schema/person/image/',
              url: 'https://secure.gravatar.com/avatar/36774511e8a79af5a9c814a75a4dc65e?s=96&d=mm&r=g',
              contentUrl:
                'https://secure.gravatar.com/avatar/36774511e8a79af5a9c814a75a4dc65e?s=96&d=mm&r=g',
              caption: 'Denise Herrick',
            },
            logo: {
              '@id': 'https://herrickdesign.com/#/schema/person/image/',
            },
            url: 'https://herrickdesign.com/blog/author/denise/',
          },
        ],
      },
    },
    _links: {
      self: [{ href: 'https://herrickdesign.com/wp-json/wp/v2/posts/3425' }],
      collection: [{ href: 'https://herrickdesign.com/wp-json/wp/v2/posts' }],
      about: [{ href: 'https://herrickdesign.com/wp-json/wp/v2/types/post' }],
      author: [
        {
          embeddable: true,
          href: 'https://herrickdesign.com/wp-json/wp/v2/users/6',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://herrickdesign.com/wp-json/wp/v2/comments?post=3425',
        },
      ],
      'version-history': [
        {
          count: 5,
          href: 'https://herrickdesign.com/wp-json/wp/v2/posts/3425/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 3435,
          href: 'https://herrickdesign.com/wp-json/wp/v2/posts/3425/revisions/3435',
        },
      ],
      'wp:attachment': [
        { href: 'https://herrickdesign.com/wp-json/wp/v2/media?parent=3425' },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://herrickdesign.com/wp-json/wp/v2/categories?post=3425',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://herrickdesign.com/wp-json/wp/v2/tags?post=3425',
        },
      ],
      curies: [
        { name: 'wp', href: 'https://api.w.org/{rel}', templated: true },
      ],
    },
  },
];

interface Post {
  id: number;
  date_gmt: string;
  title: { rendered: string };
  content: { rendered: string };
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  template: `
    <ng-container>
      <article *ngFor="let post of posts">
        <h1>{{ post.title.rendered }}</h1>
        <h2>{{ post.date_gmt | date : 'medium' }}</h2>
        <p></p>
        <div innerHTML="{{ post.content.rendered }}"></div>
        <hr />
      </article>
    </ng-container>
  `,
  styles: [
    `
      /* for herrickdesign */
      :host {
        --x-postpress-article-width: 60rem;
        --x-postpress-img-max-width: 60rem;

        hr {
          margin: 1rem;
        }
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
        margin: 0;
        padding: 0 0.25rem 0 0.25rem;
      }

      figure.alignleft {
        padding: 0 1rem 0 0;
      }

      figure > figcaption {
        font-size: smaller;
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
        max-height: var(--x-postpress-wp-block-gallery-img-max-height, inherit);
        max-width: var(--x-postpress-wp-block-gallery-img-max-width, inherit);
        min-height: var(--x-postpress-wp-block-gallery-img-min-height, inherit);
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
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AboutComponent {
  public posts: Post[] = initialState;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(environment.API_URL).subscribe((posts: any) => {
      this.posts = posts.map(
        (post: Post) =>
          this.posts.find((searchPost: Post) => searchPost.id === post.id) ??
          post
      );
    });
  }
}
