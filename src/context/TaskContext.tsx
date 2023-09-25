import { createContext, useContext, useEffect, useState } from 'react'

const TaskContext = createContext<any>(null)

interface ContextProps {
  children: React.ReactNode
}

export function TaskProvider({ children }: ContextProps) {
  const savedTasks = localStorage.getItem('daily-tasks')
  const [checkedTasks, setCheckedTasks] = useState<string[]>([])
  const [tasks, setTasks] = useState<string[]>(
    savedTasks ? JSON.parse(savedTasks) : []
  )
  const [currentTask, setCurrentTask] = useState('')
  const [tasksSent, setTasksSent] = useState<string[]>([])
  const selectedTasks = tasks.filter(task => checkedTasks.includes(task))

  useEffect(() => {
    savedTasks
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('daily-tasks', JSON.stringify(tasks))
  }, [tasks])

  const saveTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask])
      setCurrentTask('')
    }
  }

  const handleSendTasks = () => {
    // Verifica se as tarefas ainda não foram enviadas no mesmo dia
    selectedTasks.forEach(task => {
      if (!tasksSent.includes(task)) {
        // Marca a tarefa como enviada
        setTasksSent([...tasksSent, task])
        // Você pode realizar qualquer outra lógica relacionada ao envio aqui
      }
    })
  }

  console.log(tasksSent)

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        checkedTasks,
        setCheckedTasks,
        saveTask,
        currentTask,
        setCurrentTask,
        handleSendTasks,
        selectedTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext)
}
