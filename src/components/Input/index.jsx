import { InputWrapper, StyledLabel } from './styled'

export default function Input({ label, type, id, autoComplete, event, value }) {
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
                    <StyledLabel>
                        {label}
                        <input
                            type={type}
                            id={id}
                            autoComplete={autoComplete}
                            onChange={event}
                            value={value}
                        />
                    </StyledLabel>
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
