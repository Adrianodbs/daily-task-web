import styled from 'styled-components'

import { FiX } from 'react-icons/fi'

interface ModalProps {
  content: string
  close: () => void
}

export default function Modal({ content, close }: ModalProps) {
  return (
    <Container>
      <Content>
        <button className="close" onClick={close}>
          <FiX size={23} color="#fff" />
          Voltar
        </button>
        <span>{content}</span>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`

const Content = styled.div`
  position: fixed;
  max-width: 600px;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 5em 2rem;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

  .close {
    background-color: #f65835;
    border: 0;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  .close svg {
    margin-right: 5px;
  }

  span {
    font-weight: bold;
    font-size: 1.2em;
    color: #121212;
  }
`
