import { initializeApp } from 'firebase/app';
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);