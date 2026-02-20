import styles from './Button.module.css';

function Button({ 
    onClick, 
    children, 
    variant = "default",
    size = 'large'
}) {

    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size] || ''}`;

    return(
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    )
}

export default Button;