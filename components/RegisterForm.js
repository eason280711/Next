import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
const AddForm = () => {
    const [Account,setAccount] = useState('')
    const [Password,setPassword] = useState('')
    const [mail,setMail] = useState('')

    const onReg = (e) => {
        if(Account == '' && Password == '')
            return;
        onAdd({id,Name})
        setName('')
        setPrize('')
    }

    return (
        <div id={styles.comments} className={[styles.hoc,styles.padt].join(" ")}>
            <h2 className={styles.center}>Register your account</h2>
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
                <div className={[styles.one_third,styles.first].join(" ")}>
                </div>
                <div className={[styles.one_third].join(" ")}>
                    <label htmlFor="name">E-mail <span>*</span></label>
                    <input type="text" name="mail" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} size="22" required />
                </div>
                <div className={[styles.first,styles.center,styles.btnt].join(" ")}>
                    <input className={styles.btn} type="submit" value="Register" onClick={onReg}/>
                </div>
            </form>
        </div>
    )
}

export default AddForm

