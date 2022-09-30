const InputCheckbox = ({ name, label }) => {
    return (
        <label>
            {label}
            <input type="checkbox" name={name} />
        </label>
    )
}

export default InputCheckbox;