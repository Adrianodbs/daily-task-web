import Button from '../../components/Button'
import Input from '../../components/Input'
import * as C from './style'

function Home() {
  return (
    <C.Container>
      <C.Content>
        <h1>Registre uma nova tarefa</h1>
        <Input title="Título da tarefa" placeholder="Adicionar tarefa" />
        <Button children="salvar" />
      </C.Content>
    </C.Container>
  )
}

export default Home
