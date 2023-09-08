import { styled } from 'styled-components'

interface InputProps {
  title: string
  placeholder: string
}

export default function Input({ title, placeholder }: InputProps) {
  return (
    <InputLabel>
      <span>{title}</span>
      <input type="text" placeholder={placeholder} />
    </InputLabel>
  )
}

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 90%;

  span {
    font-weight: 500;
    color: var(--purple);
  }

  input {
    border: 1px solid #cacaca;
    height: 32px;
    padding: 8px;
    width: 80%;
    border-radius: 4px;
    outline: none;
  }
`
