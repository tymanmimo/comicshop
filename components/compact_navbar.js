import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from '../styles/CompactNavbar.module.css'
import CatalogMenu from './catalog_menu'
import LogInBox from './log_in_box'
import SignInBox from './sign_in_box'


const CompactNavbar = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isNavAnimate, setIsNavAnimate] = useState(false);

    const handleInnerMenuOpen = () => {
        setIsNavMenuOpen(true);
        setTimeout(() => setIsNavAnimate(true));
        setIsButtonDisabled(true);
        setTimeout(() => setIsButtonDisabled(false), 1000);
    }

    const handleInnerMenuClose = () => {
        setIsNavAnimate(false);
        setTimeout(() => setIsNavMenuOpen(false), 1000);
        setIsButtonDisabled(true);
        setTimeout(() => setIsButtonDisabled(false), 1000);
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

    return (
        <>
            <div className={styles.navbar}>
                <Link href="/" className={styles.logo}>COMICSHOP</Link>
                <button className={styles.menu_button} onClick={handleInnerMenuOpen} disabled={isButtonDisabled}>MENU</button>
                {isNavMenuOpen && (
                    <div className={`${styles.content_menu} ${!isNavAnimate ? styles.animate : ''}`}>
                        <button className={styles.button_inside_menu} onClick={handleInnerMenuClose} disabled={isButtonDisabled}>CLOSE</button>
                        <div>
                            <Link className={styles.link} href="/">
                                <button className={`${styles.button_inside_menu} ${styles.space}`}>HOME</button>
                            </Link>
                            <button className={styles.button_inside_menu} onClick={toggleCatalogMenu} disabled={isButtonDisabled}>CATALOG</button>
                            <CatalogMenu
                                isOpen={isOpenCatalogMenu}
                                isAnimated={isAnimateCatalogMenu}
                                onMenuToggle={toggleCatalogMenu}
                            />
                            <Link className={styles.link} href="/contact">
                                <button className={styles.button_inside_menu}>CONTACT</button>
                            </Link>
                            <Link className={styles.link} href="/about_us">
                                <button className={styles.button_inside_menu}>ABOUT US</button>
                            </Link>
                        </div>
                        <div className={styles.authbox} id='authCont'>
                            <button className={`${styles.authbutton} ${styles.firstauthbutton} ${styles.button_height}`} onClick={handleLogInOpen}>SIGN UP</button>
                            <button className={`${styles.authbutton} ${styles.secondauthbutton}`} onClick={handleSignInOpen}>LOG IN</button>
                        </div>
                    </div>
                )}
            </div>
            <LogInBox
                isOpen={isLogInOpen}
                onClose={handleLogInClose}
            />
            <SignInBox
                isOpen={isSignInOpen}
                onClose={handleSignInClose}
            />
        </>
    )
}

export default CompactNavbar;