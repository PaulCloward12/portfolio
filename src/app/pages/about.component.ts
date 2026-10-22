import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="container page">
      <p class="section-label">About</p>
      <h1>Paul Cloward</h1>
      <div class="bio">
        <p>
          I earned a B.S. in Computer Science from Brigham Young University in 2016. 
          I co-founded a remote health-monitoring company focused on real-time vital signs and cardiac and other alerts. 
          As lead software engineer I was the sole planner, coder, and architect of the full product: an Angular web app with separate patient and clinician portals, native Android and iOS apps that collected wearable data over Bluetooth, and a HIPAA-compliant Firebase Firestore pipeline.
        </p>
        <p>
          I hired and led a software team of eight (six web, one iOS, one Android). The company grew to roughly 30 people. 
          I left in 2024 after disagreements with the main founder and still hold equity. 
          Since then I have done freelance website work and taken an intentional break. 
          I live in Utah, am open to remote or relocation, and am building again—preferring Android while remaining open to senior full-stack, mobile, or solutions-engineering roles.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .page {
      padding: 3rem 0 4rem;
    }
    .bio {
      max-width: 68ch;
    }
    .bio p {
      margin-bottom: 1.25rem;
    }
  `]
})
export class AboutComponent {}
