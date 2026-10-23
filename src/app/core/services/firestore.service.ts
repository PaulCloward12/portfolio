import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

// example
const snapshot = await getDocs(collection(db, 'projects'));