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
          [routerLink]="site.route"
          class="link title"
          style="background-color: {{ site.titleBackgroundColor }}; color: {{
            site.titleColor
          }};"
        >
          <div class="title-text">{{ site.title }}</div>
          <div class="icon"><i class="material-icons">{{ site.icon }}</i></div>
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
        width:100%;

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

        .title-text {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: calc(100vw - 9rem);
        }

        .icon {
          margin-left: 1rem;
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
export class SlidesComponent {
  handleCardButtonClick(url: string) {
    globalThis.location.href = url;
  }

  sites = [
    {
      icon: 'apps',
      href: 'https://kherrick.github.io/apps/slides/rendering-app-shells-and-pwas-oh-my',
      route: '/slides/rendering-app-shells-and-pwas-oh-my',
      subtitle: `An overview of various rendering styles on the web, coverage on the "App Shell" architecture, and an introduction to Progressive Web Apps.`,
      title: 'Rendering, App Shells, and PWAs, oh my!',
      titleBackgroundColor: '#333',
      titleColor: '#ddd',
    },
    {
      icon: 'install_mobile',
      href: 'https://kherrick.github.io/apps/slides/progressive-web-apps',
      route: '/slides/progressive-web-apps',
      subtitle: `An investigation into <a href="https://kherrick.github.io/apps/slides/progressive-web-apps">Progressive Web Apps</a>.`,
      title: 'Progressive Web Apps',
      titleBackgroundColor: 'rgb(71,	104,	135)',
      titleColor: '#fff',
    },
  ];
}
