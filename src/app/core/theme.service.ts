import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(false);

  constructor() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark.set(stored === 'dark' || (!stored && prefersDark));

    effect(() => {
      document.documentElement.classList.toggle('dark', this.isDark());
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    });
  }

  toggle() {
    this.isDark.update(v => !v);
  }
}
