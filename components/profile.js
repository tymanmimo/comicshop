import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/Auth.module.css'

const Profile = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const [isHidden, setIsHidden] = useState(true);
    const [isAnimate, setIsAnimate] = useState(true);

    const handleClose = () => {
        setTimeout(() => setIsHidden(true));
        setTimeout(() => setIsAnimate(true));
        setTimeout(() => onClose(), 500);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setTimeout(() => setIsHidden(true));
                setTimeout(() => setIsAnimate(true));
                setTimeout(() => onClose(), 500);
            }
        };
        if (isOpen) {
            setTimeout(() => setIsHidden(false));
            setTimeout(() => setIsAnimate(false));
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const signOut = () =>{
        localStorage.removeItem('authEmail');
        onClose();
    }

    return (
        <>
            {isOpen && (
                <div className={`${styles.container} ${isHidden ? styles.hidden : ''}`}>
                    <div ref={modalRef} className={`${styles.content} ${isAnimate ? styles.animate : ''}`}>
                        <button className={styles.close_button} onClick={handleClose}>CLOSE</button>
                        <div className={styles.profile_content}>
                            <h2 className={styles.text}>PROFILE</h2>
                            <div className={styles.profileBox}>
                                <h2 className={styles.profileText}>EMAIL:<br/>dasha.bobrovich@gmail.com</h2>
                                <h2 className={styles.profileText}>NAME:<br/>Dasha Bobrovich</h2>
                            </div>
                            <h2></h2>
                            <img src="https://media.tenor.com/JXGMaWurWmIAAAAd/котенок-котики.gif" className={styles.gif}/>
                            <button className={styles.button} onClick={signOut}>SIGN OUT</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile;