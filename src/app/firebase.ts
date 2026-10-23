import { initializeApp, FirebaseApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';
import { getFunctions, Functions, connectFunctionsEmulator } from 'firebase/functions';

const app:FirebaseApp = initializeApp(environment.firebase);
export const functions: Functions = getFunctions(app);

// Optional App Check
if (environment.recaptchaSiteKey) {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(environment.recaptchaSiteKey),
    isTokenAutoRefreshEnabled: true,
  });
}

// Optional: connect to emulator in development
if (!environment.production) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}

export const db = getFirestore(app);
