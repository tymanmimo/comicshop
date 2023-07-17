import Link from "next/link"
import Navbar from "@/components/navbar"
import styles from "../styles/Contact.module.css"
import Image from "next/image"
import image1 from "../resources/images/Bezykjhg.png"
import image3 from "../resources/images/Bezym_okjhg.png"
import image2 from "../resources/images/Bezymyanny-1.png"


export default function Contact() {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.mail}>cs@comics.com</h2>
                        <h1 className={styles.text}>CONTACT INFO</h1>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.contacts_row}>
                            <div className={styles.space}>
                                <Link href="/">
                                    <Image src={image1} className={styles.inst_img} />
                                </Link>
                            </div>
                            <div className={styles.center}>
                                <h2 className={styles.contacts_text}>Suite 2, 25-26 Dering<br />Street, Mayfair</h2>
                            </div>
                        </div>
                        <div className={styles.contacts_row}>
                            <div className={styles.uspace}>
                                <Link href="/">
                                    <Image src={image2} className={styles.utube_img} />
                                </Link>
                            </div>
                            <div className={styles.center}>
                                <h2 className={styles.contacts_text}>London W1S 1AT</h2>
                            </div>
                        </div>
                        <div className={styles.contacts_row}>
                            <div className={styles.space}>
                                <Link href="/">
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