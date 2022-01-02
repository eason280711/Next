import styles from '../../styles/layout.module.css'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const about = () => {
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>About Us</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
        <div className={[styles.wrapper,styles.row2].join(" ")}>
            <div className={[styles.hoc,styles.container,styles.clear].join(" ")}>
                <div className={[styles.content,styles.imgr].join(" ")}>
                    <Image src="/01.png" alt="" height={200} width={200}/>    
                </div> 
            </div>
        </div>
        <div className={[styles.wrapper,styles.row3].join(" ")}>
            <div className={[styles.hoc,styles.container,styles.clear].join(" ")}>
                <div className={[styles.content,styles.imgl].join(" ")}>
                    <Image src="/01.png" alt="" height={200} width={200}/>    
                </div> 
            </div>
        </div>
        <div className={[styles.wrapper,styles.row2].join(" ")}>
            <div className={[styles.hoc,styles.container,styles.clear].join(" ")}>
                <div className={[styles.content,styles.imgr].join(" ")}>
                    <Image src="/01.png" alt="" height={200} width={200}/>    
                </div> 
            </div>
        </div>
        </>
        
    )
}

export default about


            