import { styled } from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return <ButtonItem {...props}>{children}</ButtonItem>
}

const ButtonItem = styled.button`
  max-width: 200px;
  width: 90%;
  border: none;
  background-color: var(--purple);
  height: 32px;
  color: #fff;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
