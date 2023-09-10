import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import styles from '@/styles/Home.module.css'
import ScrollToTopButton from '@/components/scroll_to_top_button'

export default function Home() {
    return (
        <>
            <Head>
                <title>COMICSHOP</title>
                <link rel="icon" href="https://img.icons8.com/hatch/64/anime.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <ScrollToTopButton />
                <div className={styles.categorys}>
                    <div className={`${styles.comicbooks} ${styles.viewblock}`}>
                        <h1 className={styles.viewblocktext}>COMIC BOOKS</h1>
                        <Link href='/catalog'>
                            <button className={styles.viewblockbutton}>VIEW MORE</button>
                        </Link>
                    </div>
                    <div className={`${styles.manga} ${styles.viewblock}`}>
                        <h1 className={styles.viewblocktext}>MANGA</h1>
                        <Link href='/catalog'>
                            <button className={styles.viewblockbutton}>VIEW MORE</button>
                        </Link>
                    </div>
                    <div className={`${styles.ranobe} ${styles.viewblock}`}>
                        <h1 className={styles.viewblocktext}>RANOBE</h1>
                        <Link href='/catalog'>
                            <button className={styles.viewblockbutton}>VIEW MORE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
