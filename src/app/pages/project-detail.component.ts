import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS } from '../core/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (project) {
      <article class="container page">
        <p class="section-label">Project</p>
        <h1>{{ project.title }}</h1>
        <div class="tags">
          @for (t of project.tech; track t) {
            <span class="tag">{{ t }}</span>
          }
        </div>

        <section>
          <h2>Problem</h2>
          <p>{{ project.problem }}</p>
        </section>

        <section>
          <h2>Role & Decisions</h2>
          <p>{{ project.role }}</p>
        </section>

        <section>
          <h2>Tech stack</h2>
          <p>{{ project.tech.join(', ') }}</p>
        </section>

        <section>
          <h2>Outcomes</h2>
          <p>{{ project.outcomes }}</p>
        </section>

        @if (project.liveUrl || project.repoUrl) {
          <section class="links">
            @if (project.liveUrl) {
              <a [href]="project.liveUrl" class="btn btn-secondary" target="_blank" rel="noopener">Live</a>
            }
            @if (project.repoUrl) {
              <a [href]="project.repoUrl" class="btn btn-secondary" target="_blank" rel="noopener">Repository</a>
            }
          </section>
        }

        <p><a routerLink="/projects">← All projects</a></p>
      </article>
    } @else {
      <section class="container page">
        <h1>Project not found</h1>
        <p><a routerLink="/projects">Back to projects</a></p>
      </section>
    }
  `,
  styles: [`
    .page {
      padding: 3rem 2rem 4rem;
    }
    section {
      margin-top: 2rem;
      max-width: 68ch;
    }
    .links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
  `]
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  project = PROJECTS.find(p => p.slug === this.route.snapshot.paramMap.get('slug'));
}
