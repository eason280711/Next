import '../styles/globals.css'
import Layout from'../components/Layout'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [isLog,setLog] = useState(true)
  const [isGame,setGame] = useState(false)
  return (
  <Layout isLog={isLog} setLog={setLog} isGame={isGame} setGame={setGame}>
    <Component isLog={isLog} setLog={setLog} isGame={isGame} setGame={setGame}{...pageProps} />
  </Layout>
  )
}

export default MyApp
