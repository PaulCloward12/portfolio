import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhJ5iF58LbZ7JjyrY8LUL0Dpp3E5upVf8',
  authDomain: 'portfolio-c5bdc.firebaseapp.com',
  projectId: 'portfolio-c5bdc',
  storageBucket: 'portfolio-c5bdc.firebasestorage.app',
  messagingSenderId: '1067827518104',
  appId: '1:1067827518104:web:c45e10eb4137457ed18eed',
  measurementId: 'G-KWT7LFXHP0',
};

// Keep a singleton db for the rest of the app
const app = initializeApp(firebaseConfig);

// App Check – must run before other Firebase services
initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider('YOUR_RECAPTCHA_ENTERPRISE_SITE_KEY'),
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore(app);
