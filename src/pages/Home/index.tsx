import Button from '../../components/Button'
import Input from '../../components/Input'
import * as C from './style'

import tarefas from '../../assets/img/tarefas.png'
import tarefas02 from '../../assets/img/tarefas02.png'
import tarefas03 from '../../assets/img/tarefas03.png'

function Home() {
  return (
    <C.Container>
      <C.Content>
        <img className="hero heroLeft" src={tarefas03} />
        <img className="hero heroRight" src={tarefas02} />
        <h1>Registre uma nova tarefa</h1>
        <img src={tarefas} />
        <Input title="Título da tarefa" placeholder="Adicionar tarefa" />
        <Button children="salvar" />
      </C.Content>
    </C.Container>
  )
}

export default Home
