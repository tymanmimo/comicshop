import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import Head from 'next/head'
import Navbar from "@/components/navbar"
import ScrollToTopButton from '@/components/scroll_to_top_button'
import styles from "../styles/Contact.module.css"
import Image from "next/image"
import image1 from "../resources/images/Bezykjhg.png"
import image3 from "../resources/images/Bezym_okjhg.png"
import image2 from "../resources/images/Bezymyanny-1.png"


export default function Contact() {
    return (
        <>
            <Head>
                <title>CONTACT</title>
                <link rel="icon" href="https://img.icons8.com/hatch/64/anime.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <ScrollToTopButton />
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.mail}>cs@comics.com</h2>
                        <h1 className={styles.text}>CONTACT INFO</h1>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.contacts_row}>
                            <div className={styles.space}>
                                <Link href="https://instagram.com/daamsha?igshid=MzRlODBiNWFlZA==" className={styles.link_zero}>
                                    <Image src={image1} className={styles.inst_img} />
                                </Link>
                            </div>
                            <div className={styles.center}>
                                <h2 className={styles.contacts_text}>Suite 2, 25-26 Dering<br />Street, Mayfair</h2>
                            </div>
                        </div>
                        <div className={styles.contacts_row}>
                            <div className={styles.uspace}>
                                <Link href="https://www.youtube.com/watch?v=Zi_XLOBDo_Y">
                                    <Image src={image2} className={styles.utube_img} />
                                </Link>
                            </div>
                            <div className={styles.center}>
                                <h2 className={styles.contacts_text}>London W1S 1AT</h2>
                            </div>
                        </div>
                        <div className={styles.contacts_row}>
                            <div className={styles.space}>
                                <Link href="https://www.facebook.com/Nizariyyah/">
                                    <Image src={image3} className={styles.inst_img} />
                                </Link>
                            </div>
                            <div className={styles.center}>
                                <h2 className={styles.contacts_text}>+44 (0) 786 797 1545</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}