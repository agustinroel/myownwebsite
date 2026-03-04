import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'user-theme';
  public theme = signal<'light' | 'dark'>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      this.updateTheme(currentTheme);
      localStorage.setItem(this.THEME_KEY, currentTheme);
    });
  }

  private getInitialTheme(): 'light' | 'dark' {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark' | null;
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private updateTheme(theme: 'light' | 'dark') {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }

  public toggleTheme() {
    this.theme.update((prev) => (prev === 'light' ? 'dark' : 'light'));
  }
}
