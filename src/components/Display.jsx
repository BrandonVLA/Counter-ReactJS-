import styles from './Display.module.css';

function Display({ value, title = 'Current Value' }) {
    const valueClass = value>= 0 ? styles.positive : styles.negative;
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={`${styles.value} ${valueClass}`}>{value}</p>
        </div>
    )
}

export default Display;