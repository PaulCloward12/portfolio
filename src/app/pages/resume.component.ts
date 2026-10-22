import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  template: `
    <section class="container page">
      <p class="section-label">Resume</p>
      <h1>Resume</h1>
      <p>Download the current PDF resume.</p>
      <a href="/assets/paul-cloward-resume.pdf" class="btn btn-primary" download="paul-cloward-resume.pdf">Download PDF</a>      <p class="note">Placeholder path. Replace with the real file when available.</p>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 0 4rem;
    }
    .note {
      margin-top: 1rem;
      color: var(--ink-dim);
      font-size: 0.875rem;
    }
  `]
})
export class ResumeComponent {}
