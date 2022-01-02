import Merchandise from './Merchandise'
import NextPageBar from './NextPageBar'
import Submitbtn from './Submitbtn'
import React from 'react'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AddForm from './AddForm'
function randID(){
    const table = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let s = '';
    for(let i = 0;i < 7;i++)
    {
        let a = Math.floor(Math.random()*62)
        s += table[a];
    }
    return s;
}
const Menu = () => {
    const router = useRouter();
    const {id} = router.query;
    const a = (id-1)*8;
    const [show,setShow] = useState(false);
    const [merch, setMer] = useState([
        {
            id:1,
            Name:'短劍',
            Seed:'50MQDI0短劍',
        },
        {
            id:2,
            Name:'耒云',
            Seed:'63JI3OR耒云',
        },
        {
            id:3,
            Name:'法仗',
            Seed:'DAHDH95法仗',
        },
        {
            id:4,
            Name:'掉在地上的頭髮',
            Seed:'M4P8OF9掉在地上的頭髮',
        },
        {
            id:5,
            Name:'飛機杯',
            Seed:'PS1YSKN飛機杯',
        },
        {
            id:6,
            Name:'俄羅斯',
            Seed:'X2S1FJD俄羅斯',
        },
        {
            id:7,
            Name:'掉在地上的頭髮',
            Seed:'M4d8OF9掉在地上的頭髮',
        },
        {
            id:8,
            Name:'飛機',
            Seed:'PSySKN飛機',
        },
    ])
    const addMer = (Mer) => {
        const Seed = randID() + Mer.Name;
        Mer = {...Mer,Seed};
        setMer([...merch,Mer]);
        console.log(merch);
    }
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>Shop</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/shop/1">Shop</Link></li>
                <li>{'Page'+id}</li>
            </ul>
        </div>
        <div className={[styles.wrapper,styles.row3].join(" ")}>
            <div className={[styles.hoc,styles.padt].join(" ")}>
                <Submitbtn ck={setShow} show={show}></Submitbtn>
            </div>
            {show && <AddForm array={merch} onAdd={addMer} ck={setShow} show={show}></AddForm>}
            <main id={styles.header} className={[styles.outframe_2,styles.hoc,styles.container,styles.clear].join(" ")}> 
                <div className={styles.content}> 
                    <div id={styles.gallery}>
                        <figure>
                            <Merchandise array={merch} i={a}></Merchandise>
                        </figure>
                    </div>
                </div>
                <NextPageBar len={Math.ceil(merch.length/8)}></NextPageBar>
                <div className={styles.clear}></div>
            </main>
            <div className={[styles.hoc,styles.padr].join(" ")}>
            </div>
        </div>
        </>
    )
}

export default Menu