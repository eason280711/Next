import styles from '../styles/layout.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Gameboard from '../components/Gameboard'
const game = ({isLog,setLog,isGame,setGame}) => {
    return (
        <>
        <div id={styles.breadcrumb} className={[styles.hoc,styles.clear].join(" ")}> 
            <h6 className={styles.heading}>Game</h6>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/game">Game</Link></li>
            </ul>
        </div>
        <div className={[styles.wrapper,styles.row2,styles.gb].join(" ")}>
            <div id={styles.references} className={[styles.hoc,styles.container,styles.clear].join(" ")}> 
                <Gameboard isGame={isGame}></Gameboard>
            </div>
        </div>
        </>
        
    )
}

export default game