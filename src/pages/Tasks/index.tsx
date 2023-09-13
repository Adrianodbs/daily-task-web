import { useState } from 'react'
import Button from '../../components/Button'
import { useTaskContext } from '../../context/TaskContext'
import { getCurrentDate } from '../../utils/GetCurrentDate'

import * as C from './style'

export default function Tasks() {
  const [checkedTasks, setCheckedTasks] = useState<string[]>([])

  const { tasks } = useTaskContext()

  function handleChecked(task: string) {
    // Verificar se a tarefa já está na lista de tarefas marcadas
    if (checkedTasks.includes(task)) {
      // Se estiver, remova-a
      setCheckedTasks(checkedTasks.filter(t => t !== task))
    } else {
      // Se não estiver, adicione-a
      setCheckedTasks([...checkedTasks, task])
    }
  }

  console.log(checkedTasks)
  return (
    <C.Container>
      <C.Content>
        <h1>{getCurrentDate()}</h1>
        <C.Tasks>
          <C.List>
            {tasks.map((task: string, index: number) => (
              <C.TaskItem key={index}>
                <li>{task}</li>
                <C.Checkbox
                  type="checkbox"
                  checked={checkedTasks.includes(task)}
                  onChange={() => handleChecked(task)}
                />
              </C.TaskItem>
            ))}
          </C.List>

          <Button children="Enviar" />
        </C.Tasks>
      </C.Content>
    </C.Container>
  )
}
