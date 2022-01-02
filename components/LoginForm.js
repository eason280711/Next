import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
const AddForm = ({isLog,setLog}) => {
    const [Account,setAccount] = useState('')
    const [Password,setPassword] = useState('')

    const Login = ({id,name}) => {
        setLog(true)
    }
    const onlog = (e) => {
        if(Account == '' && Password == '')
            return;
        Login({Account,Password})
        setAccount('')
        setPassword('')
    }

    return (
        <div id={styles.comments} className={[styles.hoc,styles.padt].join(" ")}>
            <h2 className={styles.center}>Login your account</h2>
            <form>
                <div className={[styles.one_third,styles.first].join(" ")}>
                </div>
                <div className={[styles.one_third].join(" ")}>
                    <label htmlFor="name">Account <span>*</span></label>
                    <input type="text" name="Account" id="Account" value={Account} onChange={(e) => setAccount(e.target.value)} size="22" required />
                </div>
                <div className={[styles.one_third,styles.first].join(" ")}>
                </div>
                <div className={[styles.one_third].join(" ")}>
                    <label htmlFor="name">Password <span>*</span></label>
                    <input type="text" name="Password" id="Password" value={Password} onChange={(e) => setPassword(e.target.value)} size="22" required />
                </div>
                <div className={[styles.first].join(" ")}>
                    <p className={styles.center}>No account?   <Link href="/register">Regirster Now!</Link></p>
                </div>
                <div className={[styles.first,styles.center,styles.btnt].join(" ")}>
                    <input className={styles.btn} type="submit" value="Log In" onClick={onlog}/>
                </div>
            </form>
    
            <ul className={[styles.faicos,styles.clear,styles.center].join(" ")}>
                <a className={[styles.faicon_google_plus].join(" ")} href="#"><i className={[styles.fab,styles.fa_google_plus_g].join(" ")}></i>&emsp;使用Google登入</a>
            </ul>
        </div>
    )
}

export default AddForm
