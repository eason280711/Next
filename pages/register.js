import styles from '../styles/layout.module.css'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import RegisterForm from '../components/RegisterForm'
const register = ({isLog,setLog,isGame,setGame}) => {
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>Regirster</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/register">Register</Link></li>
            </ul>
        </div>
        <div className={[styles.wrapper,styles.row3].join(" ")}>
            <div className={[styles.hoc,styles.container,styles.clear].join(" ")}>
                <div className={[styles.content,styles.loginh].join(" ")}>
                    <RegisterForm></RegisterForm>   
                </div> 
            </div>
        </div>
        </>
        
    )
}

export default register
