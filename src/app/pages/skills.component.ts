import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  skills: { name: string; highlight?: boolean }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="container page">
      <p class="section-label">Skills</p>
      <h1>What I work with</h1>

      <div class="skills-card">
        @for (group of groups; track group.title; let first = $first, last = $last) {
          <div class="group" [class.group-first]="first">
            <h2>{{ group.title }}</h2>
            <div class="chips">
              @for (skill of group.skills; track skill.name; let i = $index) {
                <span
                  class="chip"
                  [class.highlight]="skill.highlight"
                  [style.animation-delay.ms]="i * 40"
                >
                  {{ skill.name }}
                </span>
              }
            </div>
          </div>
          @if (!last) {
            <div class="divider" aria-hidden="true"></div>
          }
        }
      </div>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 0 4rem;
    }

    .skills-card {
      margin-top: 1.5rem;
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 2rem;
      display: grid;
      gap: 0;
    }

    .group {
      padding: 1.5rem 0;
    }

    .group:first-child {
      padding-top: 0;
    }

    .group:last-of-type {
      padding-bottom: 0;
    }

    /* Explicit divider between groups (mobile) */
    .divider {
      height: 1px;
      background: var(--line);
      margin: 0.25rem 0 0.5rem;
    }

    .group-first {
      position: relative;
      background: color-mix(in srgb, var(--accent) 7%, transparent);
      border-radius: 8px;
      padding: 1.25rem 1.25rem 1.5rem;
      margin: -0.5rem -0.5rem 0;
    }

    @media (min-width: 900px) {
      .skills-card {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0 2.5rem;
      }

      .group {
        padding: 0;
      }

      .divider {
        display: none;
      }

      .group + .group {
        border-left: 1px solid var(--line);
        padding-left: 2rem;
      }

      .group-first {
        margin: 0;
        padding: 1.25rem;
        border-radius: 8px;
      }
    }

    .group h2 {
      font-size: 1.15rem;
      margin-bottom: 1rem;
      color: var(--ink);
    }

    .group-first h2 {
      color: var(--accent);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      padding: 0.45rem 0.9rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--ink);
      background: color-mix(in srgb, var(--ink) 6%, var(--bg-elev));
      border: 1px solid var(--line);
      border-radius: 999px;
      line-height: 1.2;
      opacity: 0;
      transform: translateY(6px);
      animation: chip-in 0.45s ease forwards;
      transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
    }

    .chip:hover {
      transform: translateY(-4px);
      background: color-mix(in srgb, var(--accent) 22%, var(--bg-elev));
      border-color: color-mix(in srgb, var(--accent) 65%, var(--line));
      box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 18%, transparent);
    }

    .chip.highlight:hover {
      background: color-mix(in srgb, var(--accent) 38%, var(--bg-elev));
      border-color: color-mix(in srgb, var(--accent) 75%, var(--line));
      box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 25%, transparent);
    }

    @keyframes chip-in {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .chip {
        opacity: 1;
        transform: none;
        animation: none;
        transition: none;
      }
      .chip:hover {
        transform: none;
        box-shadow: none;
      }
    }

    .chip.highlight {
      background: color-mix(in srgb, var(--accent) 18%, var(--bg-elev));
      border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
      color: var(--ink);
    }

    :root.dark .chip {
      background: color-mix(in srgb, var(--ink) 8%, var(--bg-elev));
    }

    :root.dark .chip.highlight {
      background: color-mix(in srgb, var(--accent) 28%, var(--bg-elev));
      border-color: color-mix(in srgb, var(--accent) 55%, transparent);
    }
  `]
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript' },
        { name: 'Angular', highlight: true },
        { name: 'Kotlin' },
        { name: 'Java' },
        { name: 'C#' },
        { name: 'C++' },
        { name: 'HTML / CSS / SCSS' }
      ]
    },
    {
      title: 'Mobile & Backend',
      skills: [
        { name: 'Android', highlight: true },
        { name: 'Bluetooth' },
        { name: 'Node' },
        { name: 'Firebase / Firestore', highlight: true },
        { name: 'System design' }
      ]
    },
    {
      title: 'Practice & Tools',
      skills: [
        { name: 'Team leadership', highlight: true },
        { name: 'Product architecture' },
        { name: 'HIPAA-aware systems' },
        { name: 'Jira / Confluence / Slack' }
      ]
    }
  ];
}
