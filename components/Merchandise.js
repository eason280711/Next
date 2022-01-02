import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'

const Merchandise = ({array,i}) => {
    const router = useRouter();
    const {id} = router.query;
    let tmp = new Array();
    console.log(i);
    for(let j = i;j < i+8;j++)
    {
        if(j >= array.length) break;
        tmp.push(array[j]);
    }
    console.log(tmp);
    return (
        <ul className={[styles.nospace,styles.clear].join(" ")}>
            {tmp.map((item,index) => (
                (index % 4 == 0)? 
                <li key={index} className={[styles.one_quarter,styles.first].join(" ")}><Link href="/shop/[id]/[menu]" as={`/shop/${id}/${item.Seed}`}><a><Image src="/01.png" alt="" height={500} width={500}/></a></Link>{item.Name}</li>
                :
                <li key={index} className={[styles.one_quarter].join(" ")}><Link href="/shop/[id]/[menu]" as={`/shop/${id}/${item.Seed}`}><a><Image src="/01.png" alt="" height={500} width={500}/></a></Link>{item.Name}</li>
            ))}
        </ul>
    )
}

export default Merchandise

