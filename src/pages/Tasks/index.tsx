import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { useTaskContext } from '../../context/TaskContext'
import { getCurrentDate } from '../../utils/GetCurrentDate'

import * as C from './style'

export default function Tasks() {
  const [checkedTasks, setCheckedTasks] = useState<string[]>([])
  const [progress, setProgress] = useState(100)
  const [progressColor, setProgressColor] = useState('green')

  const navigate = useNavigate()

  const { tasks } = useTaskContext()

  useEffect(() => {
    const completedTask = checkedTasks.length
    const totalTasks = tasks.length
    const percentage = (completedTask / totalTasks) * 100

    if (percentage <= 25) {
      setProgressColor('red')
    } else if (percentage <= 50) {
      setProgressColor('orange')
    } else {
      setProgressColor('green')
    }

    setProgress(percentage)
  }, [checkedTasks, tasks])

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
          <C.BtnSend>
            <C.ProgressBar>
              <div
                style={{
                  width: `${(300 * progress) / 100}px`,
                  height: '100%',
                  backgroundColor: progressColor
                }}
              ></div>
              <p>Tarefas concluídas: {Math.floor(progress)}%</p>
            </C.ProgressBar>
            <Button children="Enviar" />
          </C.BtnSend>
        ) : (
          <Button children="Adicionar tarefa" onClick={handleAddTaskClick} />
        )}
      </C.Content>
    </C.Container>
  )
}
