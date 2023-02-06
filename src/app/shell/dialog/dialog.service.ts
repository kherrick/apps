import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public open$: Subject<boolean> = new Subject<boolean>();
  public indeterminateProgress: boolean = false;

  public content: string = '';
  public title: string = 'Alert';
}
