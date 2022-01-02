import React from 'react'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
const Nav = ({isLog,setLog,isGame,setGame}) => {
    const Ck = () => {
        setGame(!isGame)
    }
    return (
        <>
        {isLog ?
            <nav id={styles.mainav}>
            <ul className={styles.clear}>
                <li className={styles.active}><Link href="/">home</Link></li>
                <li><Link href="/game">Game</Link></li>
                <li><Link href="/shop/1">Shop</Link></li>
                <li><a className={styles.drop} href="#">About</a>
                    <ul>
                        <li><Link href="/about/AboutTema">About Тема</Link></li>
                        <li><Link href="/about/AboutUs">About Us</Link></li>
                    </ul>
                </li>
                <li><a className={styles.drop} href="#">Log Out</a>
                    <ul>
                        <li><Link href="/register">Profile</Link></li>
                        <li><Link href="/login">Log Out</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
        :
        <nav id={styles.mainav}>
            <ul className={styles.clear}>
                <li className={styles.active}><Link href="/">home</Link></li>
                <li><Link href="/login">Game</Link></li>
                <li><Link href="/login">Shop</Link></li>
                <li><a className={styles.drop} href="#">About</a>
                    <ul>
                        <li><Link href="/about/AboutTema">About Тема</Link></li>
                        <li><Link href="/about/AboutUs">About Us</Link></li>
                    </ul>
                </li>
                <li><a className={styles.drop} href="#">Log In</a>
                    <ul>
                        <li><Link href="/login">Log In</Link></li>
                        <li><Link href="/register">Register</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
        }
        </>
    )
}

export default Nav
