import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tarefas</Link>
        </li>
        <li>
          <Link to="/dashboard">Pontuação</Link>
        </li>
      </ul>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);

  ul {
    display: flex;
    gap: 48px;

    @media (max-width: 320px) {
      gap: 24px;
    }
  }

  li {
    list-style: none;
    color: var(--purple);
    font-weight: 600;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      transform: scale(1.09);
    }

    @media (max-width: 320px) {
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
  }
`
