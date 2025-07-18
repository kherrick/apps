import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { XDialogService } from './x-dialog.service';

@Component({
  selector: 'x-dialog',
  imports: [],
  template: `
    <div dialog-container>
      <dialog #dialog class="dialog">
        <div class="title">{{ dialogService.title }}</div>
        <div class="content">
          @if (dialogService.indeterminateProgress) {
            <div class="progress-container">
              <div class="progress circular indeterminate">
                <progress indeterminate="">75%</progress>
              </div>
            </div>
          }
          <p>{{ dialogService.content }}</p>
        </div>
        <form (submit)="handleSubmit($event)" class="actions" method="dialog">
          @if (
            this.dialogService.cancelValue && this.dialogService.cancelText
          ) {
            <button
              #cancelButton
              class="button cancel"
              value="{{ dialogService.cancelValue }}"
            >
              {{ dialogService.cancelText }}
            </button>
          }
          <button
            #submitButton
            class="button submit"
            value="{{ dialogService.submitValue }}"
          >
            {{ dialogService.submitText }}
          </button>
        </form>
      </dialog>
    </div>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/button/style.css' as button-style;
      @use 'material-design-lite/css/components/dialog/style.css' as dialog-style;
      @use 'material-design-lite/css/components/progress-indicator/style.css' as progress-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      [dialog-container] {
        left: 5%;
        margin: 2rem;
        position: absolute;
        right: 5%;
        top: 25%;
        z-index: 9;

        --md-sys-comp-dialog-background-color: var(--md-sys-color-surface);
        --md-sys-comp-dialog-color: var(--md-sys-color-primary);

        dialog::backdrop {
          background-color: var(
            --x-shell-dialog-backdrop-background-color,
            rgba(0, 0, 0, 0.75)
          );
        }

        .content {
          display: flex;
          flex-direction: column;
        }

        .progress-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .cancel {
          margin-right: 0.5rem;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XDialogComponent implements OnDestroy {
  private dialogSubscription: Subscription;

  public dialogService: XDialogService = inject(XDialogService);

  @ViewChild('submitButton') submitButton!: ElementRef;
  @ViewChild('dialog') dialog!: ElementRef;

  constructor() {
    this.dialogSubscription = this.dialogService.open$.subscribe(
      (isDialogOpen: boolean) => {
        if (isDialogOpen) {
          if (this.dialogService.modal) {
            this.dialog.nativeElement.showModal();
          } else {
            this.dialog.nativeElement.show();
          }

          requestAnimationFrame(() => {
            this.submitButton.nativeElement.focus();
          });
        } else {
          this.dialog.nativeElement.close();
        }
      },
    );
  }

  handleSubmit(event: SubmitEvent): void {
    this.dialogService.result$.next(
      (event.submitter as HTMLButtonElement).value,
    );

    this.dialogService.closeDialog();
  }

  ngOnDestroy(): void {
    this.dialogSubscription?.unsubscribe();
  }
}
