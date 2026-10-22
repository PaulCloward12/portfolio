import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="container page">
      <p class="section-label">Skills</p>
      <h1>What I work with</h1>
      <div class="groups">
        <div>
          <h2>Languages & Frameworks</h2>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Angular</li>
            <li>Kotlin</li>
            <li>Java</li>
            <li>C#</li>
            <li>C++</li>
            <li>HTML / CSS / SCSS</li>
          </ul>
        </div>
        <div>
          <h2>Mobile & Backend</h2>
          <ul>
            <li>Android</li>
            <li>Bluetooth</li>
            <li>Node</li>
            <li>Firebase / Firestore</li>
            <li>System design</li>
          </ul>
        </div>
        <div>
          <h2>Practice & Tools</h2>
          <ul>
            <li>Team leadership</li>
            <li>Product architecture</li>
            <li>HIPAA-aware systems</li>
            <li>Jira / Confluence / Slack</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 0 4rem;
    }
    .groups {
      display: grid;
      gap: 2rem;
      margin-top: 1.5rem;
    }
    @media (min-width: 768px) {
      .groups {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
    ul {
      margin: 0;
      padding-left: 1.2rem;
      color: var(--ink-dim);
    }
    li {
      margin-bottom: 0.35rem;
    }
  `]
})
export class SkillsComponent {}
