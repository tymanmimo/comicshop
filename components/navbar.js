import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import LogInBox from '../components/log_in_box'
import SignInBox from '../components/sign_in_box'


const Navbar = () => {
    const [isLogInOpen, setIsLogInOpen] = useState(false)
    const [isSignInOpen, setIsSignInOpen] = useState(false)
    const handleLogInOpen = () => {
        setIsLogInOpen(true);
    }
    const handleSignInOpen = () => {
        setIsSignInOpen(true);
    }
    const handleLogInClose = () => {
        setIsLogInOpen(false);
    }
    const handleSignInClose = () => {
        setIsSignInOpen(false);
    }

    return (
        <>
            <div className={styles.navbar}>
                <Link href="/" className={styles.logo}>COMICSHOP</Link>
                <div>
                    <button className={`${styles.navbutton} ${styles.firstnavbutton}`}>CATALOG</button>
                    <button className={`${styles.navbutton} ${styles.secondnavbutton}`}>CONTACT</button>
                    <button className={`${styles.navbutton} ${styles.secondnavbutton}`}>ABOUT US</button>
                </div>
                <div className={styles.authcont}>
                    <button className={`${styles.authbutton} ${styles.firstauthbutton}`} onClick={handleLogInOpen}>SIGN UP</button>
                    <button className={`${styles.authbutton} ${styles.secondauthbutton}`} onClick={handleSignInOpen}>LOG IN</button>
                    <LogInBox
                        isOpen={isLogInOpen}
                        onClose={handleLogInClose}
                    />
                    <SignInBox
                        isOpen={isSignInOpen}
                        onClose={handleSignInClose}
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar;