import Link from 'next/link'
import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import styles from '@/styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>COMICSHOP</title>
                <link rel="icon" href="https://img.icons8.com/hatch/64/anime.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.categorys}>
                    <div className={`${styles.comicbooks} ${styles.viewblock}`}>
                        <h1 className={styles.viewblocktext}>COMIC BOOKS</h1>
                        <button className={styles.viewblockbutton}>VIEW MORE</button>
                    </div>
                    <div className={`${styles.manga} ${styles.viewblock}`}>
                        <h1 className={styles.viewblocktext}>MANGA</h1>
                        <button className={styles.viewblockbutton}>VIEW MORE</button>
                    </div>
                    <div className={`${styles.ranobe} ${styles.viewblock}`}>
                        <h1 className={styles.viewblocktext}>RANOBE</h1>
                        <button className={styles.viewblockbutton}>VIEW MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
