// nova configuração para Firebase SDK 9
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

// teste de firebase: para saber se foi inicializado ou não
if(!getApps().length) {
    initializeApp(firebaseConfig);
}

const firestore = getFirestore();

export { firestore };