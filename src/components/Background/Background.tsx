import React from 'react'
import styles from './Background.module.css'

const Background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.backgroundGray}></div>

        </div>
    )
}

export default Background