import Head from 'next/head'
import Navbar from "@/components/navbar"
import ScrollToTopButton from '@/components/scroll_to_top_button'
import styles from "../styles/About_us.module.css"
import Image from "next/image"
import image from "../resources/images/lxJEfrP.jpg"

export default function Contact() {
    return (
        <>
            <Head>
                <title>ABOUT US</title>
                <link rel="icon" href="https://img.icons8.com/hatch/64/anime.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <ScrollToTopButton />
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.info_text}>We used to think that our store compares favorably with other book and comic stores precisely because of our approach to business, design, assortment, advertising and communication with customers. We value our customers and try to dedicate those interested in the vast, but so interesting and diverse world of comics. Each of our employees will be happy to help you find something to your taste, even if you don't know what exactly you are looking for or where to start getting acquainted with comics.</h2>
                        <h2 className={styles.info_text}>And today we are very glad that we can continue to please you with a grand assortment, cool design, close-knit work of our team, high level of service and personal approach to each customer.</h2>
                    </div>
                    <div className={styles.visual}>
                        <Image src={image} className={styles.image} />
                        <h1 className={styles.ABOUT_COMICSHOP}>ABOUT COMICSHOP</h1>
                    </div>
                </div>
            </div>
        </>
    )
}