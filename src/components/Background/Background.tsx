import React from 'react'
import styles from './Background.module.css'
import { useTheme } from '../../context/themeContext'

export default function Background() {
    const theme = useTheme();
    return (
        <div className={styles.background}>
            <div className={styles.backgroundImage + " " + (theme === 'light' ? styles.bgLight : styles.bgDark)}></div>

        </div>
    )
}
