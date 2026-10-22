import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../core/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container page">
      <p class="section-label">Projects</p>
      <h1>Work</h1>
      <div class="grid">
        @for (project of projects; track project.slug) {
          <article class="card">
            <h2><a [routerLink]="['/projects', project.slug]">{{ project.title }}</a></h2>
            <p>{{ project.shortDescription }}</p>
            <div class="tags">
              @for (t of project.tech; track t) {
                <span class="tag">{{ t }}</span>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 0 4rem;
    }
    .grid {
      display: grid;
      gap: 2rem;
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
    .card h2 {
      font-size: 1.4rem;
    }
    .card h2 a {
      color: var(--ink);
      text-decoration: none;
    }
    .card h2 a:hover {
      color: var(--accent);
    }
  `]
})
export class ProjectsComponent {
  projects = PROJECTS;
}
