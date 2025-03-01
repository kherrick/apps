import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'x-links',
  imports: [CommonModule, RouterModule],
  template: `
    <section x-section-cards>
      <section *ngFor="let site of sites" site class="card">
        <a
          [href]="site.href"
          class="link title"
          style="background-color: {{ site.titleBackgroundColor }}; color: {{
            site.titleColor
          }};"
        >
          {{ site.title }}
          <i class="material-icons">{{ site.icon }}</i>
        </a>
        <div class="subtitle" [innerHTML]="site.subtitle"></div>
        <div class="actions">
          <button (click)="handleCardButtonClick(site.href)" class="filled">
            Go
          </button>
        </div>
      </section>
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
export class LinksComponent {
  handleCardButtonClick(url: string) {
    globalThis.location.href = url;
  }

  sites = [
    {
      icon: 'videocam',
      href: 'https://plainandeasy.com/',
      subtitle: `<a href="https://plainandeasy.com/">GIFWorks</a> makes movies from shared
        screens and webcams.</a>
      `,
      title: 'GIFWorks',
      titleBackgroundColor: '#333',
      titleColor: '#ddd',
    },
    {
      icon: 'book',
      href: 'https://bible-tools.github.io/app/',
      subtitle: `<a href="https://bible-tools.github.io/app/">Bible Tools</a> features
        several translations viewable within a PWA.
      `,
      title: 'Bible Tools',
      titleBackgroundColor: 'rgb(134, 2, 3)',
      titleColor: '#fff',
    },
    {
      icon: 'cloud',
      href: 'https://kherrick.github.io/x-weather-app/',
      subtitle: `<a href="https://kherrick.github.io/x-weather-app/">XWeather App</a>
        composes select web components together to form a basic weather overview for
        various locations.
      `,
      title: 'XWeather App',
      titleBackgroundColor: 'rgb(71,	104,	135)',
      titleColor: '#fff',
    },
    {
      icon: 'smart_toy',
      href: 'https://kherrick.github.io/tfjs-component-playground/',
      subtitle: `<a href="https://kherrick.github.io/tfjs-component-playground/">
        TFJS Component Playground</a> offers face detection, classification, and
        identification for a variety of media using TensorFlow.js.
      `,
      title: 'TFJS Component Playground',
      titleBackgroundColor: '#999',
      titleColor: '#fff',
    },
  ];
}
