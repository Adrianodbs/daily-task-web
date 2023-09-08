import { useTaskContext } from '../../context/TaskContext'

import * as C from './style'

export default function Tasks() {
  const { tasks } = useTaskContext()
  return (
    <C.Container>
      <C.Content>
        <h1>Lista de Tarefas</h1>
        <C.Tasks>
          <ul>
            {tasks.map((task: string, index: number) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </C.Tasks>
      </C.Content>
    </C.Container>
  )
}
