import styles from '../styles/layout.module.css'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import Auth from '../components/Auth'
const login = ({isLog,setLog,isGame,setGame}) => {
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>Login</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/login">login</Link></li>
            </ul>
        </div>

        <div className={[styles.wrapper,styles.row3].join(" ")}>
            <div className={[styles.hoc,styles.container,styles.clear].join(" ")}>
                <div className={[styles.content,styles.loginh].join(" ")}>
                    <Auth></Auth>   
                </div> 
            </div>
        </div>
        </>
        
    )
}

export default login

/*<div className={[styles.wrapper,styles.row3].join(" ")}>
            <div className={[styles.hoc,styles.container,styles.clear].join(" ")}>
                <div className={[styles.content,styles.loginh].join(" ")}>
                    <LoginForm isLog={isLog} setLog={setLog}></LoginForm>   
                </div> 
            </div>
        </div>*/