// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCig2tg3Qsd9xQHL6MA8PjhMJOkfJSHVmI',
    authDomain: 'todo-f2969.firebaseapp.com',
    projectId: 'todo-f2969',
    storageBucket: 'todo-f2969.appspot.com',
    messagingSenderId: '107849825832',
    appId: '1:107849825832:web:180b8e11461f166e867f1d',
    databaseURL: 'https://todo-f2969-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
