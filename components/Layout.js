import React from 'react'
import styles from '../styles/layout.module.css'
import Nav from './Nav'
import Link from 'next/link'
const Layout = ({children, isLog,setLog,isGame,setGame}) => {
    return (
        <div className={[styles.bgded,styles.overlay].join(" ")}>
            <div className={[styles.wrapper,styles.row1].join(" ")}>
                <header id={styles.header} className={[styles.hoc,styles.clear].join(" ")}>
                    <div id={styles.logo} className={styles.fl_left}>
                    </div>
                    <div className={[styles.fl_left]} id={styles.logo}>
                        <nav id={styles.mainav}>
                            <ul className={styles.clear}>
                                <li><p className={styles.fontbig}>Т е м а</p></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={[styles.fl_right]} id={styles.logo}>
                        <Nav isLog={isLog} setLog={setLog} isGame={isGame} setGame={setGame}/>
                    </div>
                </header>
            </div>
            {children}
            <div className={[styles.wrapper,styles.row4].join(" ")}>
                <footer id={styles.footer} className={[styles.hoc,styles.clear].join(" ")}> 
                    <div className={styles.clear}>
                        <div className={[styles.btmspace,styles.center].join(" ")}>
                            <div className={[styles.one_third,styles.first].join(" ")}>
                                <h6 className={styles.heading}>Contact Us</h6>
                                <ul className={[styles.faico,styles.clear].join(" ")}>
                                    <li><a className={styles.faicon_dribble} href="#"><i className={[styles.fab,styles.fa_dribbble].join(" ")}></i></a></li>
                                    <li><a className={styles.faicon_facebook} href="#"><i className={[styles.fab,styles.fa_facebook].join(" ")}></i></a></li>
                                    <li><a className={styles.faicon_google_plus} href="#"><i className={[styles.fab,styles.fa_google_plus_g].join(" ")}></i></a></li>
                                    <li><a className={styles.faicon_linkedin} href="#"><i className={[styles.fab,styles.fa_linkedin].join(" ")}></i></a></li>
                                    <li><a className={styles.faicon_twitter} href="#"><i className={[styles.fab,styles.fa_twitter].join(" ")}></i></a></li>
                                    <li><a className={styles.faicon_vk} href="#"><i className={[styles.fab,styles.fa_vk].join(" ")}></i></a></li>
                                </ul>
                            </div>
                            <div className={styles.two_third}>
                                <div className={[styles.wrapper,styles.bgded,styles.overlay].join(" ")}>
                                    <section id={styles.testimonials} className={[styles.hoc,styles.container,styles.clear].join(" ")}> 
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className={[styles.wrapper,styles.row5].join(" ")}>
                <div id={styles.copyright} className={[styles.hoc,styles.clear].join(" ")}> 
                    <p className={styles.fl_left}>Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
                    <p className={styles.fl_right}>Template by <a href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
                </div>
            </div>
        </div>
    )
}

export default Layout