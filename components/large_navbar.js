import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/LargeNavbar.module.css'
import LogInBox from './log_in_box'
import SignInBox from './sign_in_box'
import CatalogMenu from './catalog_menu'

const LargeNavbar = () => {
    const [isLogInOpen, setIsLogInOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    
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

    const [isOpenCatalogMenu, setIsOpenCatalogMenu] = useState(false);
    const [isAnimateCatalogMenu, setIsAnimateCatalogMenu] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const toggleCatalogMenu = () => {
        if (!isOpenCatalogMenu) {
            setIsOpenCatalogMenu(true);
            setIsAnimateCatalogMenu(true);
            setIsButtonDisabled(true);
            setTimeout(() => setIsButtonDisabled(false), 1000);
        } else {
            setIsAnimateCatalogMenu(false);
            setTimeout(() => setIsOpenCatalogMenu(false), 1000);
            setIsButtonDisabled(true);
            setTimeout(() => setIsButtonDisabled(false), 1000);
        }
    }

    return (
        <>
            <div className={styles.navbar}>
                <Link href="/" className={styles.logo}>COMICSHOP</Link>
                <div>
                    <button className={`${styles.navbutton} ${styles.firstnavbutton}`} onClick={toggleCatalogMenu} disabled={isButtonDisabled}>CATALOG</button>
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
                </div>
            </div>
            <LogInBox
                isOpen={isLogInOpen}
                onClose={handleLogInClose}
            />
            <SignInBox
                isOpen={isSignInOpen}
                onClose={handleSignInClose}
            />
            <CatalogMenu
                isOpen={isOpenCatalogMenu}
                isAnimated={isAnimateCatalogMenu}
                onMenuToggle={toggleCatalogMenu}
            />
        </>
    )
}

export default LargeNavbar;