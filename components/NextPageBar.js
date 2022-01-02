import React from 'react'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
const NextPageBar = ({len}) => {
    const router = useRouter();
    const {id} = router.query;
    const ls = Array.from(Array(len).keys());
    return (
        <nav className={styles.pagination}>
            <ul>
                {
                    (id == 1)?
                    <li><Link href={"/shop/" + (Number(id))}>&laquo; Previous</Link></li>
                    :
                    <li><Link href={"/shop/" + (Number(id)-1)}>&laquo; Previous</Link></li>
                }
                {ls.map((item,index) => (
                    (index + 1 == id)? 
                    <li key={index} className={styles.current}><strong>{id}</strong></li>
                    :
                    <li key={index}><Link href={"/shop/" + (Number(index)+1)}><strong>{item+1}</strong></Link></li>
                ))}
                {
                    (id == len)?
                    <li><Link href={"/shop/" + (Number(id))}>Next &raquo;</Link></li>
                    :
                    <li><Link href={"/shop/" + (Number(id)+1)}>Next &raquo;</Link></li>
                }
            </ul>
        </nav>
    )
}

export default NextPageBar