import styled from 'styled-components'

interface ModalProps {
  content: string
  close: () => void
  onConfirm: () => void
}

export default function Modal({ content, close, onConfirm }: ModalProps) {
  return (
    <Container>
      <Content>
        <span>{content}</span>
        <div className="buttons">
          <button onClick={onConfirm}>Sim</button>
          <button className="close" onClick={close}>
            Cancelar
          </button>
        </div>
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
  width: 90%;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 5em 2rem;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  border-radius: 12px;

  span {
    font-weight: bold;
    font-size: 1.2em;
    color: #121212;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 40px;
  }

  .buttons button {
    background-color: #008000;
    border: 0;
    color: #fff;
    padding: 4px 15px;
    border-radius: 5px;
    cursor: pointer;
    min-width: 100px;
    height: 32px;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  .buttons button.close {
    background-color: #f65835;
  }
`
