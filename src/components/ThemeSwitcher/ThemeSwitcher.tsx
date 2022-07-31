import React from 'react';
import { useTheme, useSetTheme } from '../../context/themeContext';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
    const theme = useTheme();
    const setTheme = useSetTheme();
    return (
        <div className={styles.themeSwitcher}>
            {theme === 'dark' && (<img src="./images/icon-sun.svg" onClick={() => setTheme('light')} />)}
            {theme === 'light' && (<img src="./images/icon-moon.svg" onClick={() => setTheme('dark')} />)}

        </div>
    )
}