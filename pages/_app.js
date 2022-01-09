import '../styles/globals.css'
import Layout from'../components/Layout'
import { useState } from 'react'
import firebase from 'firebase/compat/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import 'firebase/compat/auth'
import { getAuth, onAuthStateChanged } from 'firebase/compat/auth';
function MyApp({ Component, pageProps }) {
  
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
  const [isLog,setLog] = useState(false)
  const [isGame,setGame] = useState(false)
  const auth = firebase.auth();
  auth.onAuthStateChanged(user => { 
      console.log(user)
      if(user != null) {
          setLog(true)
      }
  });
  return (
  <Layout isLog={isLog} setLog={setLog} isGame={isGame} setGame={setGame}>
    <Component isLog={isLog} setLog={setLog} isGame={isGame} setGame={setGame}{...pageProps} />
  </Layout>
  )
}

export default MyApp