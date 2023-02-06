import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';

import { DialogService } from 'src/app/shell/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <dialog class="dialog" [open]="dialogService.open$ | async">
      <div class="title">{{ dialogService.title }}</div>
      <div class="content">
        <div
          class="progress-container"
          *ngIf="dialogService.indeterminateProgress"
        >
          <div class="progress circular indeterminate">
            <progress indeterminate="">75%</progress>
          </div>
        </div>
        <p>{{ dialogService.content }}</p>
      </div>
      <form (submit)="handleSubmit()" class="actions" method="dialog">
        <button #submitButton class="button">OK</button>
      </form>
    </dialog>
  `,
  styles: [
    `
      @use 'node_modules/material-design-lite/docsite/public/css/components/button/style.css' as button-style;
      @use 'node_modules/material-design-lite/docsite/public/css/components/dialog/style.css' as dialog-style;
      @use 'node_modules/material-design-lite/docsite/public/css/components/progress-indicator/style.css' as progress-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap');

      :host {
        left: 5%;
        margin: 2rem;
        position: absolute;
        right: 5%;
        top: 25%;
        z-index: 9;

        --md-sys-comp-dialog-background-color: white;

        .content {
          display: flex;
          flex-direction: column;
        }

        .progress-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DialogComponent implements OnDestroy {
  private dialogSubscription: Subscription;

  @ViewChild('submitButton') submitButton!: ElementRef;

  constructor(@Inject(DialogService) public dialogService: DialogService) {
    this.dialogSubscription = this.dialogService.open$.subscribe(
      (isDialogOpen: boolean) => {
        if (isDialogOpen) {
          requestAnimationFrame(() => {
            this.submitButton.nativeElement.focus();
          });
        }
      }
    );
  }

  handleSubmit(): void {
    this.dialogService.open$.next(false);
    this.dialogService.indeterminateProgress = false;
    this.dialogService.content = '';
    this.dialogService.title = '';
  }

  ngOnDestroy(): void {
    this.dialogSubscription?.unsubscribe();
  }
}
