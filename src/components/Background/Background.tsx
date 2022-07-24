import { JsxElement } from 'typescript'
import styles from './Background.module.css'

const Background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.baclgroundGray}></div>
            
        </div>
    )
}

export default Background