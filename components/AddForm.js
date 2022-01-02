import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
const AddForm = ({onAdd,ck,show}) => {
    const [Name,setName] = useState('')
    const [id,setPrize] = useState('')

    const onSubmit = (e) => {
        if(id == '' && Name == '')
            return;
        onAdd({id,Name})
        ck(!show)
        setName('')
        setPrize('')
        alert('Successful Introduce!');
    }

    return (
        <div id={styles.comments} className={[styles.hoc,styles.padt].join(" ")}>
            <h2>Upload & Write your Game description</h2>
            <form>
                <div className={[styles.one_half,styles.first].join(" ")}>
                    <label htmlFor="name">Game Name <span>*</span></label>
                    <input type="text" name="name" id="name" value={Name} onChange={(e) => setName(e.target.value)} size="22" required />
                </div>
                <div className={styles.one_half}>
                    <label htmlFor="email">Build File <span>*</span></label>
                    <input type="file" webkitdirectory="" directory="" name="prize" id="prize" value={id} onChange={(e) => setPrize(e.target.value)} size="22" required />
                </div>
                <div className={[styles.block,styles.clear].join(" ")}>
                    <label htmlFor="comment">Description</label>
                    <textarea name="comment" id="comment" cols="25" rows="10"></textarea>
                </div>
                <div className={styles.center}>
                    &nbsp;
                    <input className={styles.btn} type="submit" value="Submit Form" onClick={onSubmit}/>
                </div>
            </form>
        </div>
    )
}

export default AddForm

