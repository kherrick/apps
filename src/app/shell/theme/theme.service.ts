import { Injectable, WritableSignal, signal } from '@angular/core';

export enum Themes {
  Light = 'light',
  Dark = 'dark',
}

export type Theme = Themes.Light | Themes.Dark;

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: WritableSignal<Theme> = signal(Themes.Light);

  persistToStorage(key: any, value: any) {
    let now: number | Date = new Date();
    now = now.getTime();

    localStorage.setItem(key, value);
    localStorage.setItem(`${key}-last-change`, String(now));
  }
}
