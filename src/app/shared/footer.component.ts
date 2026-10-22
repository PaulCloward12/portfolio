import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="brand">
          <h2 class="name">Paul Cloward</h2>
          <p class="role">SOFTWARE ENGINEER</p>
          <div class="accent-line"></div>
        </div>

        <nav class="footer-nav">
          <!-- <a routerLink="/">Home</a>
          <span class="sep">|</span> -->
          <a routerLink="/about">About</a>
          <span class="sep">|</span>
          <a routerLink="/skills">Skills</a>
          <span class="sep">|</span>
          <a routerLink="/projects">Projects</a>
          <span class="sep">|</span>
          <a routerLink="/resume">Resume</a>
          <span class="sep">|</span>
          <!-- <a routerLink="/blog">Blog</a>
          <span class="sep">|</span> -->
          <a routerLink="/contact">Contact</a>
        </nav>

        <div class="social">
          <a href="https://github.com/PaulCloward" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          </a>
          <a href="https://linkedin.com/in/paulrandal" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.76h-4.56v-7.76c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1V24H8.34V8.5z"/></svg>
          </a>
          <a href="https://x.com/PaulCloward" target="_blank" rel="noopener" aria-label="X">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="mailto:paul@example.com" aria-label="Email">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z"/></svg>
          </a>
        </div>

        <p class="copyright">© {{ year }} Paul Cloward. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative;
      background: var(--bg);
      color: var(--ink);
      margin-top: 5rem;
      padding: 4rem 0 1rem;
      border-top: 1px solid var(--line);
    }

    .footer::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: var(--accent);
    }

    .footer-inner {
      max-width: var(--max);
      margin: 0 auto;
      padding: 0 clamp(1.25rem, 4vw, 3rem);
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      align-items: start;
    }

    .name {
      font-family: var(--font-display);
      font-size: clamp(2.4rem, 5vw, 3.4rem);
      font-weight: 500;
      margin: 0;
      letter-spacing: -0.02em;
      color: var(--ink);
    }

    .role {
      font-size: 0.8rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-dim);
      margin: 0.4rem 0 0.75rem;
    }

    .accent-line {
      width: 2.5rem;
      height: 2px;
      background: var(--accent);
    }

    .footer-nav {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.6rem 0.4rem;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border: 1px solid green;
    }

    .footer-nav a {
      color: var(--ink);
      text-decoration: none;
      padding: 0.25rem 0;
    }

    .footer-nav a:hover {
      color: var(--accent);
    }

    .sep {
      color: var(--ink);
      user-select: none;
      font-size: 1rem;
    }

    .social {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .social a {
      color: var(--ink-dim);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
    }

    .social a:hover {
      color: var(--accent);
    }

    .copyright {
      margin: 0;
      font-size: 0.8rem;
      color: var(--ink-dim);
    }

    @media (min-width: 768px) {
      .footer-inner {
        grid-template-columns: 0.8fr 1.2fr;
        grid-template-rows: auto auto auto;
        grid-template-areas:
          "brand ."
          "brand nav"
          "brand social"
          ". copyright";
        column-gap: 4rem;
        row-gap: 1.5rem;
        align-items: start;
        min-height: 280px;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .brand {
        grid-area: brand;
        align-self: start;
        margin-top: 0;
      }
      .footer-nav {
        grid-area: nav;
        justify-content: flex-end;
        align-self: end;
        margin-top: 10rem;
      }
      .social {
        grid-area: social;
        justify-content: flex-end;
        align-self: start;
      }
      .copyright {
        grid-area: copyright;
        text-align: right;
        align-self: end;
        margin-top: 2rem;
      }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
