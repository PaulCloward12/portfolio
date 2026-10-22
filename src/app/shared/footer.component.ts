import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>Paul Randal · {{ year }}</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--line);
      margin-top: 4rem;
      padding: 2rem 0;
      color: var(--ink-dim);
      font-size: 0.875rem;
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
