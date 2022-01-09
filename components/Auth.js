import React from 'react'
import firebase from 'firebase/compat/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import 'firebase/compat/auth'
import { getAuth, onAuthStateChanged } from 'firebase/compat/auth';
import Router from 'next/router'
const auth = ({setLog}) => {
    const clientCredentials = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    }
    const firebaseApp = firebase.initializeApp(clientCredentials)

    const auth = firebase.auth();
    auth.onAuthStateChanged(user => { 
        console.log(user)
        if(user != null) {
            setLog(true)
        }
        else{
            setLog(false)
        }
    });
    const firebaseAuthConfig = {
        signInFlow: 'popup',
        // Auth providers
        // https://github.com/firebase/firebaseui-web#configure-oauth-providers
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true,
            },
            // add additional auth flows below
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/',
        callbacks:{
            signInSuccessWithAuthResult: (result) => {
                Router.reload(window.location.pathname);
            }
        },
    }
    return (
        <div>
            <StyledFirebaseAuth
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={firebase.auth()}
                />
        </div>
    )
}

export default auth
