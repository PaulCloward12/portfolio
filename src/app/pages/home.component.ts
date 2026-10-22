import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../core/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="container">
        <p class="section-label">Paul Randal</p>
        <h1>Founding software engineer. Architect of a full remote health-monitoring platform. Building again.</h1>
        <p class="open">Open to senior full-stack, Android, and solutions-engineering roles.</p>
        <div class="ctas">
          <a routerLink="/projects" class="btn btn-primary">View projects</a>
          <a routerLink="/contact" class="btn btn-secondary">Contact</a>
        </div>
      </div>
    </section>

    <section class="featured">
      <div class="container">
        <p class="section-label">Featured work</p>
        <h2>Selected projects</h2>
        <div class="grid">
          @for (project of featured; track project.slug) {
            <article class="card">
              <h3><a [routerLink]="['/projects', project.slug]">{{ project.title }}</a></h3>
              <p>{{ project.shortDescription }}</p>
              <div class="tags">
                @for (t of project.tech; track t) {
                  <span class="tag">{{ t }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 4rem 0 3rem;
    }
    .hero h1 {
      max-width: 18ch;
      margin-bottom: 1rem;
    }
    .open {
      color: var(--ink-dim);
      margin-bottom: 1.5rem;
    }
    .ctas {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .featured {
      padding: 2rem 0 4rem;
    }
    .grid {
      display: grid;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .card {
      border-top: 1px solid var(--line);
      padding-top: 1rem;
    }
    .card h3 a {
      color: var(--ink);
      text-decoration: none;
    }
    .card h3 a:hover {
      color: var(--accent);
    }
  `]
})
export class HomeComponent {
  featured = PROJECTS.filter(p => p.featured);
}
