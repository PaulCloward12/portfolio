// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import './app/firebase';   // runs initializeApp once

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));