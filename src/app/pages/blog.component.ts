import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section class="container page">
      <p class="section-label">Blog</p>
      <h1>Blog</h1>
      <p>Coming soon.</p>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 2rem 4rem;
    }
  `]
})
export class BlogComponent {}
