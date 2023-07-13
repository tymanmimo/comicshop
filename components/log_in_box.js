import React, { useRef, useEffect } from 'react'
import styles from '../styles/Auth.module.css'

const LogInBox = ({ isOpen, onClose }) => {
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
                        <h2 className={styles.text}>LOG IN TO YOUR ACCOUNT</h2>
                        <input placeholder='Enter your email address' className={styles.input} />
                        <input placeholder='Enter your password' className={styles.input} />
                        <button className={styles.button}>CONTINUE</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default LogInBox;