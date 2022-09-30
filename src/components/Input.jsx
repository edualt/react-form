import '../assets/styles/Input.css';

const Input=({ type, name, classname, label, value, placeholder })=> {
    return (
        <div className="form__group">
        <label>
            {label}
            <br />
            <input 
            type={type}
            className={classname}
            name={name}
            value={value}
            placeholder={placeholder}
            />
        </label>
        </div>
    )
}

export default Input;