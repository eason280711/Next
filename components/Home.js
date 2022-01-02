import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
const Home = ({isLog}) => {

    if(isLog)
    {
        return (
            <>
              <div id={styles.pageintro} className={[styles.hoc,styles.clear,styles.hi].join(" ")}> 
                  <article>
                    <h3 className={styles.heading}>HOME IN GAME</h3>
                  </article>
              </div>
            </>
          )
    }
    else
    {
        return (
            <>
              <div id={styles.pageintro} className={[styles.hoc,styles.clear].join(" ")}> 
                  <article>
                    <h3 className={styles.heading}>Тема - The Adventure</h3>
                    <p>Advanture of The Тема ,Try to BEAT YUN!</p>
                    <div className={[styles.first,styles.center,styles.btnt].join(" ")}>
                        <input className={styles.btn2} type="submit" value="Play immediately!"/>
                    </div>
                  </article>
              </div>
            </>
          )
    }
}

export default Home

