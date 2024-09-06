import React from 'react'
import Left from '../Components/Left'
import Right from '../Components/Right'
import styles from "./Register.module.css"

function Register() {
    return (
        <div className={styles.container}>
            <Left />
            <Right />
        </div>
    )
}

export default Register