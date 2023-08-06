import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/Auth.module.css'

const LogInBox = ({ isOpen, onClose }) => {
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


    return (
        <>
            {isOpen && (
                <div className={`${styles.container} ${isHidden ? styles.hidden : ''}`}>
                    <div ref={modalRef} className={`${styles.content} ${isAnimate ? styles.animate : ''}`}>
                        <button className={styles.close_button} onClick={handleClose}>CLOSE</button>
                        <div className={styles.main_content}>
                            <h2 className={styles.text}>LOG IN TO YOUR ACCOUNT</h2>
                            <input placeholder='Enter your email address' className={styles.input} />
                            <input placeholder='Enter your password' className={styles.input} />
                            <button className={styles.button}>CONTINUE</button>
                        </div>
                        <div className={styles.substrate}></div>
                    </div>
                </div>
            )}
        </>
    )
}

export default LogInBox;