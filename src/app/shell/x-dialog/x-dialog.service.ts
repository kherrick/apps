import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XDialogService {
  public open$: Subject<boolean> = new Subject<boolean>();
  public result$: Subject<string> = new Subject<string>();

  public indeterminateProgress: boolean = false;
  public modal: boolean = false;

  public cancelText: string = '';
  public cancelValue: string = '';
  public content: string = '';
  public submitText: string = '';
  public submitValue: string = '';
  public title?: string = 'Alert';

  openDialog(
    message: string,
    options?: {
      cancelText?: string;
      cancelValue?: string;
      indeterminateProgress?: boolean;
      modal?: boolean;
      submitText?: string;
      submitValue?: string;
      title?: string;
    },
  ) {
    this.cancelText = options?.cancelText ? options?.cancelText : '';
    this.cancelValue = options?.cancelValue ? options?.cancelValue : '';
    this.content = message;
    this.indeterminateProgress = options?.indeterminateProgress
      ? options?.indeterminateProgress
      : false;
    this.modal = options?.modal ? options?.modal : false;
    this.submitText = options?.submitText ? options?.submitText : 'OK';
    this.submitValue = options?.submitValue ? options?.submitValue : 'ok';
    this.title = options?.title ? options?.title : 'Alert';

    this.open$.next(true);
  }

  closeDialog(): void {
    this.cancelText = '';
    this.cancelValue = '';
    this.content = '';
    this.indeterminateProgress = false;
    this.modal = false;
    this.submitText = '';
    this.submitValue = '';
    this.title = 'Alert';

    this.open$.next(false);
  }
}
