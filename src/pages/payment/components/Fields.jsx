export const TextField = ({ label, placeholder }) => (
    <label>
        <span>{label}</span>
        <input type="text" placeholder={placeholder} />
    </label>
)

export const SelectField = ({ label, placeholder, options = [] }) => (
    <label>
        <span>{label}</span>
        <select defaultValue="">
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    </label>
)
