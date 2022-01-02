import React from 'react'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Info = () => {
    const router = useRouter();
    const {menu} = router.query;
    const {id} = router.query;
    let merch;
    if(menu) merch = menu;
    else merch = "1234567ERROR";
    merch = merch.substr(7);
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>Shop</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/shop/1">Shop</Link></li>
                <li><Link href={"/shop/"+id}>{"Page "+id}</Link></li>
                <li>{merch}</li>
            </ul>
        </div>
        <div className={[styles.wrapper,styles.row3].join(" ")}>
        <div className={[styles.hoc].join(" ")}>
            <nav className={styles.pagination,styles.one_quarter,styles.fl_left,styles.test}>
                <div className={styles.btn}><Link href={"/shop/"+id}>BACK</Link></div>
            </nav>
        </div>
            <section className={[styles.hoc,styles.container,styles.clear].join(" ")}> 
                <div>
                    <Image src="/01.png" alt="" height={400} width={400}/>
                </div>
            </section>
        </div>  
        </>
    )
}

export default Info
