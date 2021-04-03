import firebase from "firebase/app";
import "firebase/auth";

// 여기 있는 모든 FireBase 관련 문서를 전부다 불러올 것이 아닌, export 를 통해 필요한 함수만 가져다 쓴다.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STROAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
//function 을 export 해서 필요할 때 한번만 선언되도록   -> App.js
