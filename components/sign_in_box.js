import React, { useRef, useEffect } from 'react'
import styles from '../styles/Auth.module.css'

const SignInBox = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    
    return (
        <>
            {isOpen && (
                <div className={styles.container}>
                    <div ref={modalRef} className={styles.content}>
                        <h2 className={styles.text}>JOIN COMICSHOP</h2>
                        <input placeholder='Еntеr your еmail adrеss' className={styles.input} />
                        <input placeholder='Make a password' className={styles.input} />
                        <button className={styles.button}>CONTINUE</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default SignInBox;