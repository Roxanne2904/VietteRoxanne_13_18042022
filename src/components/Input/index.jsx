import { InputWrapper } from './styled'

export default function Input({ label, type, id, autoComplete, event, value }) {
    // console.log(event)
    if (!event) {
        return (
            <InputWrapper>
                <label>
                    {label}
                    <input type={type} id={id} autoComplete={autoComplete} />
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
