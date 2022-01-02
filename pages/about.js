import styles from '../styles/layout.module.css'
import React from 'react'
import Link from 'next/link'
const about = ({isLog,setLog,isGame,setGame}) => {
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>About Тема</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
        <div className={[styles.wrapper,styles.row3].join(" ")}>
            <section className={[styles.hoc,styles.container,styles.clear].join(" ")}> 
            </section>
        </div>
        <div className={[styles.wrapper,styles.row2].join(" ")}>
            <section id={styles.references} className={[styles.hoc,styles.container,styles.clear].join(" ")}> 
            </section>
        </div>
        <div className={[styles.wrapper,styles.row3].join(" ")}>
            <section className={[styles.hoc,styles.container,styles.clear].join(" ")}> 
            </section>
        </div>
        </>
        
    )
}

export default about


            