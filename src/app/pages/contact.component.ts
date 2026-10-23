/*import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="container page">
      <p class="section-label">Contact</p>
      <h1>Get in touch</h1>
      <p>Open to senior full-stack, Android, mobile, or solutions-engineering roles. Remote or relocation from Utah is fine.</p>
      <ul class="links">
        <li><a href="mailto:paulcloward12@gmail.com">paulcloward12@gmail.com</a></li>
        <li><a href="https://github.com/PaulCloward" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://linkedin.com/in/paulcloward" target="_blank" rel="noopener">LinkedIn</a></li>
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
*/

import { Component, inject, signal } from '@angular/core';
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

      <form (ngSubmit)="submit()">
        <section>
          <input [(ngModel)]="name" name="name" placeholder="Your name" required>
        </section>
        <section>
            <input [(ngModel)]="email" name="email" type="email" placeholder="Email" required>
        </section>
        <section>
            <textarea [(ngModel)]="message" name="message" placeholder="Message" required style="resize: none"></textarea>
        </section>
        <section>
            <button type="submit" [disabled]="sending()">
              {{ sending() ? 'Sending…' : 'Send' }}
            </button>
        </section>
      </form>

      @if (status()) {
        <p>{{ status() }}</p>
      }
    </section>
  `
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';
  sending = signal(false);
  status = signal('');

  async submit() {
    this.sending.set(true);
    this.status.set('');

    try {
      const callable = httpsCallable<
        { name: string; email: string; message: string },
        { success: boolean }
      >(functions, 'sendContactMessage');

      const result = await callable({
        name: this.name,
        email: this.email,
        message: this.message
      });

      this.status.set('Message sent successfully.');
      this.name = this.email = this.message = '';
    } catch (err: any) {
      this.status.set(err.message || 'Failed to send message.');
    } finally {
      this.sending.set(false);
    }
  }
}