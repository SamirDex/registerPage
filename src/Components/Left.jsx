import React from 'react'
import styles from "./Left.module.css"; 
import phone from "../images/photo.jpeg"

function Left() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Social media shared today, tomorrow or by location</h1>
            <div className={styles.photo}>
                <img src={phone} alt="" />
            </div>
        </div>
    )
}

export default Left