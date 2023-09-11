import { useState } from 'react';
import styles from '../styles/Catalog.module.css';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import ScrollToTopButton from '@/components/scroll_to_top_button'
import Product from '@/components/product';

export default function Catalog() {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);


    const toggleFiltersMenu = () => {
        setIsFiltersOpen(!isFiltersOpen);
    }

    return (
        <>
            <Head>
                <title>CATALOG</title>
                <link rel="icon" href="https://img.icons8.com/hatch/64/anime.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <ScrollToTopButton />
                <div className={styles.content}>
                    <div className={styles.filters}>
                        <button className={styles.filters_button} onClick={toggleFiltersMenu}>
                            FILTERS
                            <div>
                                <div className={styles.first_cross} />
                                <div className={styles.second_cross} />
                            </div>
                        </button>
                        <div className={`${styles.filters_menu} ${isFiltersOpen ? styles.filters_open : ''}`}>
                            <a className={styles.filters_paragraph}>ON SALE</a>
                            <a className={styles.filters_paragraph}>GENRE</a>
                            <a className={styles.filters_paragraph}>PRICE</a>
                            <a className={styles.filters_paragraph}>NEW</a>
                        </div>
                    </div>
                    <div className={styles.product_area}>
                        <Product
                            title={"VENOM: LETHAL PROTECTOR II #4"}
                            author={"Michelinie, Karami"}
                            price={9.99}
                            path={"/portraituncanny1.png"}
                        />
                        <Product
                            title={"EXTREME VENOMVERSE #3"}
                            author={"Templeton, Daniel"}
                            price={9.99}
                            path={"../public/portraituncanny1.png"}
                        />
                        <Product
                            title={"CARNAGE #14"}
                            author={"Paknadel, Manna"}
                            price={9.99}
                            path={"@/public/portraituncanny1.png"}
                        />
                        <Product
                            title={"MARVEL'S SPIDER-MAN 2 #1"}
                            author={"Gage, Guara"}
                            price={9.99}
                            path={"/portraituncanny1.png"}
                        />
                        <Product
                            title={"VOLVERINE #34"}
                            author={"Percy, Ryp"}
                            price={9.99}
                            path={"./public/portraituncanny1.jpg"}
                        />
                        <Product
                            title={"SPIDER-MAN: INDIA"}
                            author={"Shukla, Malsuni"}
                            price={9.99}
                            path={"../public/portraituncanny1.jpg"}
                        />
                        <Product
                            title={"MOON KNIGHT #24"}
                            author={"Mackay, Sabbatini"}
                            price={9.99}
                            path={"@/public/portraituncanny1.jpg"}
                        />
                        <Product
                            title={"X-23: DEADLY REGENESIS #4"}
                            author={"Schultz, Salazar"}
                            price={9.99}
                            path={"./public/portrait_uncanny_5.jpg"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}