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
            <InputWrapper>
                <label>
                    {label}
                    <input
                        type={type}
                        id={id}
                        autoComplete={autoComplete}
                        defaultChecked
                    />
                </label>
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
                    <label>
                        {label}
                        <input
                            type={type}
                            id={id}
                            autoComplete={autoComplete}
                            onChange={event}
                            value={value}
                        />
                    </label>
                </InputWrapper>
            )
        }
    }
}
