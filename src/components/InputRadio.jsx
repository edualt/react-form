const InputRadio = ({ name, value, label, checked }) => (
    <label>
        {label}
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
        />
    </label>
);

export default InputRadio;