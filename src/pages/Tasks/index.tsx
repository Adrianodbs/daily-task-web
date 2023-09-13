import Button from '../../components/Button'
import { useTaskContext } from '../../context/TaskContext'
import { getCurrentDate } from '../../utils/GetCurrentDate'

import * as C from './style'

export default function Tasks() {
  const { tasks } = useTaskContext()
  return (
    <C.Container>
      <C.Content>
        <h1>{getCurrentDate()}</h1>
        <C.Tasks>
          <C.List>
            {tasks.map((task: string, index: number) => (
              <C.TaskItem>
                <li key={index}>{task}</li>
                <C.Checkbox type="checkbox" />
              </C.TaskItem>
            ))}
          </C.List>

          <Button children="Enviar" />
        </C.Tasks>
      </C.Content>
    </C.Container>
  )
}
