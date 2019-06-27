import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDHSq3DkmzmTRXZBxZTwtpkimAUsMTHn7c",
  authDomain: "eden-blog.firebaseapp.com",
  databaseURL: "https://eden-blog.firebaseio.com",
  projectId: "eden-blog",
  storageBucket: "",
  messagingSenderId: "193283232760",
  appId: "1:193283232760:web:d543d0dfb1b9afc2"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const postsRef = databaseRef.child("Posts")