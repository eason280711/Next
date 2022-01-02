import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import LoginForm from '../components/LoginForm'
import { useState } from 'react'
import Home from '../components/Home'
export default function home({isLog,setLog,isGame,setGame}) {
  return (
    <Home isLog={isLog}></Home>
  )
}



