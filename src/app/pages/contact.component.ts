import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="container page">
      <p class="section-label">Contact</p>
      <h1>Get in touch</h1>
      <p>Open to senior full-stack, Android, mobile, or solutions-engineering roles. Remote or relocation from Utah is fine.</p>
      <ul class="links">
        <li><a href="mailto:paul@example.com">paul@example.com</a></li>
        <li><a href="https://github.com/PaulCloward" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://linkedin.com/in/paulrandal" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
      <p class="note">Placeholders — replace with real contact details.</p>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 0 4rem;
    }
    .links {
      list-style: none;
      padding: 0;
      margin: 1.5rem 0;
    }
    .links li {
      margin-bottom: 0.5rem;
    }
    .note {
      color: var(--ink-dim);
      font-size: 0.875rem;
    }
  `]
})
export class ContactComponent {}
