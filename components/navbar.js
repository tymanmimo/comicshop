import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import LogInBox from '../components/log_in_box'
import SignInBox from '../components/sign_in_box'


const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(0)
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
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <div className={styles.navbar}>
                <Link href="/" className={styles.logo}>COMICSHOP</Link>
                <div>
                    <button className={`${styles.navbutton} ${styles.firstnavbutton}`}>CATALOG</button>
                    <Link href="/contact">
                        <button className={`${styles.navbutton} ${styles.secondnavbutton}`}>CONTACT</button>
                    </Link>
                    <Link href="/about_us">
                        <button className={`${styles.navbutton} ${styles.secondnavbutton}`}>ABOUT US</button>
                    </Link>
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