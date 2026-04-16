import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [Icon],
  template: `
    <button (click)="toggleTheme()">
      <app-icon [name]="isDarkMode ? 'light-mode' : 'dark-mode'" />
    </button>
  `
})
export class Theme {
  isDarkMode = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = prefersDarkMode
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.dataset['theme'] = theme;
  }
}