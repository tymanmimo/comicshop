import React, {useState, useEffect} from 'react';
import styles from '../styles/CatalogMenu.module.css';
import Link from 'next/link';

const CatalogMenu = ({ isOpen, isAnimated, onMenuToggle }) => {
    const [isHidden, setIsHidden] = useState(true);


    useEffect(() => {
        if(isAnimated){
            setIsHidden(false);
        }else{
            setIsHidden(true);
        }
    }, [isAnimated]);

    return (
        <>
            {isOpen && (
                <div className={`${styles.catalog_menu} ${isHidden ? styles.hidden : ''}`}>
                    <ul className={styles.ul_menu}>
                        <li>
                            <Link href='/catalog' className={styles.menu_text}>
                                COMIC BOOKS
                            </Link>
                        </li>
                        <li>
                            <Link href='/catalog' className={styles.menu_text}>
                                MANGA
                            </Link>
                        </li>
                        <li>
                            <Link href='/catalog' className={styles.menu_text}>
                                RANOBE
                            </Link>
                        </li>
                        <li>
                            <Link href='/catalog' className={styles.menu_text}>
                                ON SALE
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default CatalogMenu;