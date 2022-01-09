import Merchandise from './Merchandise'
import NextPageBar from './NextPageBar'
import Submitbtn from './Submitbtn'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
import AddForm from './AddForm'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
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
const Menu = ({isLog}) => {
    const router = useRouter();
    const {id} = router.query;
    const a = (id-1)*8;
    const [show,setShow] = useState(false);
    const [merch, setMer] = useState([])
    const addMer = (Mer) => {
        const Seed = randID() + Mer.Name;
        Mer = {...Mer,Seed};
        setMer([...merch,Mer]);
        console.log(merch);
    }
    function updateMenu() {
        var storageRef = firebase.storage().ref()
        var listRef = storageRef.child('');
        listRef.listAll()
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
                var id = Math.floor(Math.random()*48763);
                var Name = folderRef.name;
                let t = 0;
                for(let i = 0; i < merch.length; i++) {
                    if(merch[i].Name == Name) {
                        t++;
                    }
                }
                if(t == 0){
                    addMer({id,Name});
                }
            });
        }).catch((error) => {
            alert(error)
        });
    }
    useEffect(() => {
        updateMenu()
    }, [merch]); 
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
            {isLog && <Submitbtn ck={setShow} show={show}></Submitbtn>}
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