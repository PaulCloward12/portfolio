import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container header-inner">
        <a routerLink="/" class="logo">PC</a>
        <nav class="nav" [class.open]="menuOpen()">
          <!-- <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a> -->
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/skills" routerLinkActive="active">Skills</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
          <a routerLink="/resume" routerLinkActive="active">Resume</a>
          <a routerLink="/blog" routerLinkActive="active">Blog</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>
        <div class="header-actions">
          <button type="button" class="theme-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
            {{ theme.isDark() ? 'Light' : 'Dark' }}
          </button>
          <button type="button" class="hamburger" (click)="menuOpen.set(!menuOpen())" [attr.aria-expanded]="menuOpen()" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      border-bottom: 1px solid var(--line);
      background: var(--bg);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }
    .logo {
      font-family: var(--font-display);
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--ink);
      text-decoration: none;
    }
    .nav {
      display: flex;
      gap: 1.5rem;
    }
    .nav a {
      color: var(--ink);
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 0;
      min-height: 44px;
      display: flex;
      align-items: center;
    }
    .nav a.active,
    .nav a:hover {
      color: var(--accent);
      text-decoration: none;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .theme-toggle {
      background: none;
      border: 1px solid var(--line);
      color: var(--ink);
      padding: 0.4rem 0.8rem;
      border-radius: var(--radius);
      cursor: pointer;
      min-height: 44px;
    }
    .hamburger {
      display: none;
      background: none;
      border: none;
      width: 44px;
      height: 44px;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      cursor: pointer;
    }
    .hamburger span {
      display: block;
      height: 2px;
      width: 22px;
      background: var(--ink);
    }
    @media (max-width: 768px) {
      .nav {
        display: none;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        background: var(--bg-elev);
        flex-direction: column;
        padding: 1rem 1.25rem;
        border-bottom: 1px solid var(--line);
        gap: 0;
      }
      .nav.open {
        display: flex;
      }
      .nav a {
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--line);
      }
      .hamburger {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  theme = inject(ThemeService);
  menuOpen = signal(false);
}
