import React from 'react'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
const Submitbtn = ({ck,show}) => {
    const Show_form = (e) => {
        ck(!show);
    }
    const router = useRouter();
    const {id} = router.query;
    return (
        <nav className={styles.pagination,styles.one_quarter,styles.fl_right}>
            <div className={styles.btn} onClick={Show_form}>
                Introduce
            </div>
        </nav>
    )
}

export default Submitbtn