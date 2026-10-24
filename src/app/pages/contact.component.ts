import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="container page">
      <p class="section-label">Contact</p>
      <h1>Get in touch</h1>
      <p class="lede">
        Open to senior full-stack, Android, mobile, or solutions-engineering roles.
        Remote or relocation from Utah is fine.
      </p>

      <div class="layout">
        <form class="form" (ngSubmit)="submit()" #contactForm="ngForm">
          <div class="field">
            <label for="name">Name</label>
            <input
              id="name"
              [(ngModel)]="name"
              name="name"
              placeholder="Your name"
              required
              autocomplete="name"
            >
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              [(ngModel)]="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autocomplete="email"
            >
          </div>

          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              [(ngModel)]="message"
              name="message"
              placeholder="What are you working on?"
              required
              rows="6"
            ></textarea>
          </div>

          <div class="actions">
            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="sending() || contactForm.invalid"
            >
              {{ sending() ? 'Sending…' : 'Send message' }}
            </button>
          </div>

          @if (status()) {
            <p class="status" [class.success]="status().includes('successfully')" [class.error]="!status().includes('successfully')">
              {{ status() }}
            </p>
          }
        </form>

        <aside class="aside">
          <p class="aside-label">Or reach out directly</p>
          <ul class="links">
            <li>
              <a href="mailto:paulcloward12@gmail.com">paulcloward12@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/PaulCloward" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/paulcloward" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 2rem 5rem;
      max-width: 880px;
    }

    h1 {
      margin-bottom: 0.75rem;
    }

    .lede {
      color: var(--ink-dim);
      max-width: 48ch;
      margin-bottom: 2.5rem;
    }

    .layout {
      display: grid;
      gap: 2.5rem;
    }

    @media (min-width: 720px) {
      .layout {
        grid-template-columns: 1fr 220px;
        gap: 4rem;
        align-items: start;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .field label {
      font-size: 0.8125rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      color: var(--ink);
    }

    .field input,
    .field textarea {
      width: 100%;
      padding: 0.75rem 0.9rem;
      font: inherit;
      font-size: 1rem;
      color: var(--ink);
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      transition: border-color 0.15s ease;
    }

    .field input:focus,
    .field textarea:focus {
      outline: none;
      border-color: var(--accent);
    }

    .field input::placeholder,
    .field textarea::placeholder {
      color: var(--ink-dim);
      opacity: 0.7;
    }

    .field textarea {
      resize: vertical;
      min-height: 140px;
      line-height: 1.5;
    }

    .actions {
      margin-top: 0.25rem;
    }

    .actions .btn {
      min-width: 140px;
    }

    .actions .btn:disabled {
      opacity: 0.55;
      cursor: not-allowed;
      filter: none;
    }

    .status {
      margin: 0.25rem 0 0;
      font-size: 0.9375rem;
      padding: 0.65rem 0.85rem;
      border-radius: var(--radius);
      border: 1px solid var(--line);
    }

    .status.success {
      background: color-mix(in srgb, var(--accent) 12%, var(--bg-elev));
      border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
      color: var(--ink);
    }

    .status.error {
      background: color-mix(in srgb, #c45c4a 10%, var(--bg-elev));
      border-color: color-mix(in srgb, #c45c4a 35%, var(--line));
      color: var(--ink);
    }

    .aside {
      padding-top: 0.25rem;
    }

    .aside-label {
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-dim);
      margin: 0 0 0.75rem;
    }

    .links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .links li {
      margin-bottom: 0.4rem;
    }

    .links a {
      color: var(--ink);
      font-weight: 500;
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }

    .links a:hover {
      color: var(--accent);
      border-bottom-color: var(--accent);
      text-decoration: none;
    }

    @media (max-width: 719px) {
      .aside {
        padding-top: 0.5rem;
        border-top: 1px solid var(--line);
      }
    }
  `]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  sending = signal(false);
  status = signal('');

  async submit() {
    if (this.sending()) return;

    this.sending.set(true);
    this.status.set('');

    try {
      const callable = httpsCallable<
        { name: string; email: string; message: string },
        { success: boolean }
      >(functions, 'sendContactMessage');

      await callable({
        name: this.name,
        email: this.email,
        message: this.message
      });

      this.status.set('Message sent successfully.');
      this.name = '';
      this.email = '';
      this.message = '';
    } catch (err: any) {
      this.status.set(err?.message || 'Failed to send message.');
    } finally {
      this.sending.set(false);
    }
  }
}