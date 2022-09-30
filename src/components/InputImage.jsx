const InputImage = ({ name, label }) => {
    return (
        <label>
            {label}
            <input type="file" name={name} />
        </label>
    )
}

export default InputImage;