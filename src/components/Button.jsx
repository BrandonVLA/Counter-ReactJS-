function Button({ onClick, children, variant = "default"}) {


    return(
        <button onClick={onClick} className={`button ${variant}`}>
            {children}
        </button>
    )
}

export default Button;