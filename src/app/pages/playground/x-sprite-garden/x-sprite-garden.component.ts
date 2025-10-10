import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'x-sprite-garden',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div sprite-garden-container>
      <div sprite-garden>
        <section>
          <header>
            <h1><a href="https://kherrick.github.io/sprite-garden/">Sprite Garden</a></h1>
          </header>
          <section>
            <a href="https://kherrick.github.io/sprite-garden/">
              <img src="assets/images/sprite-garden-launcher.png" />
            </a>

            <p>
              <a href="https://kherrick.github.io/sprite-garden/">Sprite Garden</a> is a 2D sandbox
              exploration and farming game. Learn more at the
              <a href="https://github.com/kherrick/sprite-garden">project page</a>.
            </p>

            <ul>
              <li>Explore unique procedurally generated biomes</li>
              <li>Dig for valuable resources like coal, iron, and gold</li>
              <li>Use collected materials to place blocks and shape the world</li>
              <li>Plant and harvest different crop types with realistic growth cycles</li>
              <li>Discover underground cave systems filled with resources and challenges</li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

    :host {
      --md-outlined-text-field-container-shape: 1rem;
      --md-outlined-button-container-shape: 1rem;
      --md-outlined-button-disabled-label-text-color: var(--md-sys-color-on-surface);

      [sprite-garden-container] {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        justify-content: center;

        a {
          text-decoration: underline;
        }

        [sprite-garden] {
          max-width: 35rem;
          text-align: center;

          img {
            width: calc(100% - 2rem);
          }

          p {
            padding: 0 1rem;
          }

          ul {
            padding: 0 3rem;
            text-align: left;
          }
        }
      }
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XSpriteGardenComponent {}
