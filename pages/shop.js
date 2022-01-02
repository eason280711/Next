import styles from '../styles/layout.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Merchandise from '../components/Merchandise'
const shop = ({isLog,setLog,isGame,setGame}) => {
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>Shop</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
            </ul>
        </div>
        <div className={[styles.wrapper,styles.row3].join(" ")}>
            <main className={[styles.hoc,styles.container,styles.clear].join(" ")}> 
                <div className={styles.content}> 
                <div id={styles.gallery}>
                    <figure>
                        <Merchandise></Merchandise>
                    </figure>
                </div>
                <nav className={styles.pagination}>
                    <ul>
                    <li><a href="#">&laquo; Previous</a></li>
                    <li className={styles.current}><strong>1</strong></li>
                    <li><a href="#">Next &raquo;</a></li>
                    </ul>
                </nav>
                </div>
                <div className={styles.clear}></div>
            </main>
        </div>
        </>
        
    )
}

export default shop

