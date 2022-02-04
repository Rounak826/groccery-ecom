import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp(
    {
        apiKey:"AIzaSyDKRUxoaTaMyGq9MuvYyG7MWJrEjpZLDaU",
        authDomain:"techjain-grocery-ecom-demo.firebaseapp.com",
        projectId:"techjain-grocery-ecom-demo",
        storageBucket: "techjain-grocery-ecom-demo.appspot.com",
        messagingSenderId:"938828973734",
        appId: "1:938828973734:web:11d7eddff9bbcf5b341667"
    }
)
export const Auth = app.auth();
export default app;