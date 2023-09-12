import styles from "@/styles/Product.module.css"
import Image from "next/image"

export default function Product({ title, author, price, path }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <Image src={path} width={300} height={410} className={styles.image}/>
                    <div className={styles.image_overlay}>
                        <p className={styles.overlay_text}>{title}</p>
                        <p className={styles.overlay_text}>{author}</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <h2 className={styles.price}>{price}$</h2>
                    <button className={styles.button}>ADD TO CART</button>
                </div>
            </div>
        </>
    )
}