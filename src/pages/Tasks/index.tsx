import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { useTaskContext } from '../../context/TaskContext'
import { getCurrentDate } from '../../utils/GetCurrentDate'

import * as C from './style'

export default function Tasks() {
  const [checkedTasks, setCheckedTasks] = useState<string[]>([])
  const navigate = useNavigate()

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

  function handleAddTaskClick() {
    navigate('/')
  }

  return (
    <C.Container>
      <C.Content>
        <h1>{getCurrentDate()}</h1>
        <C.Tasks>
          <C.List>
            {tasks.length > 0 ? (
              <>
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
              </>
            ) : (
              <p>Você não adicionou nenhuma tarefa ainda!</p>
            )}
          </C.List>
        </C.Tasks>
        {tasks.length > 0 ? (
          <Button children="Enviar" />
        ) : (
          <Button children="Adicionar tarefa" onClick={handleAddTaskClick} />
        )}
      </C.Content>
    </C.Container>
  )
}
