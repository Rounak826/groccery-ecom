import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAzzrST4yRZtf3S4zq_KJh_unftQLRwqTQ",
        authDomain: "tech-jain-ecom-grocery.firebaseapp.com",
        projectId: "tech-jain-ecom-grocery",
        storageBucket: "tech-jain-ecom-grocery.appspot.com",
        messagingSenderId: "748469794312",
        appId: "1:748469794312:web:74138eb2b165da0db7c3bd"
    }
)
export const Auth = app.auth();
export default app;