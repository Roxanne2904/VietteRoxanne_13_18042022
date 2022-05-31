import { InputWrapper } from './styled'

export default function Input({
    label,
    type,
    id,
    autoComplete,
    event,
    value,
    placeholder,
}) {
    if (!event) {
        return (
            <InputWrapper $checkbox>
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    id={id}
                    autoComplete={autoComplete}
                    defaultChecked
                />
            </InputWrapper>
        )
    } else {
        if (id === 'firstName' || id === 'name') {
            return (
                <InputWrapper $editName>
                    <label>
                        {label}
                        <input
                            type={type}
                            id={id}
                            autoComplete={autoComplete}
                            onChange={event}
                            value={value}
                            placeholder={placeholder}
                        />
                    </label>
                </InputWrapper>
            )
        } else {
            return (
                <InputWrapper>
                    <label htmlFor={id}>{label}</label>
                    <input
                        type={type}
                        id={id}
                        autoComplete={autoComplete}
                        onChange={event}
                        value={value}
                    />
                </InputWrapper>
            )
        }
    }
}
