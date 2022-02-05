const firebaseConfig = {
    // apiKey: "AIzaSyBJrTx8I6nHxXWtgLX-CZPhUa6RMwkGdsQ",
    // authDomain: "ema-john-simple-2f1af.firebaseapp.com",
    // projectId: "ema-john-simple-2f1af",
    // storageBucket: "ema-john-simple-2f1af.appspot.com",
    // messagingSenderId: "73696150560",
    // appId: "1:73696150560:web:2503929d711001d56aa845"

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};
export default firebaseConfig;


