// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOwaRTv6DLz3enYAqRawDp0atjRdRmakk',
  authDomain: 'hobbyhub-authentication.firebaseapp.com',
  projectId: 'hobbyhub-authentication',
  storageBucket: 'hobbyhub-authentication.firebasestorage.app',
  messagingSenderId: '308082641785',
  appId: '1:308082641785:web:bc299321d529ba7fd47da8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
