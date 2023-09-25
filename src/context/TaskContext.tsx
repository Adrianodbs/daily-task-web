import { createContext, useContext, useEffect, useState } from 'react'
import { getCurrentDate } from '../utils/GetCurrentDate'

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

  const [currentDate, setCurrentDate] = useState<string>('')

  const [taskSentMap, setTaskSentMap] = useState<{ [key: string]: boolean }>(
    tasks.reduce((acc, task) => {
      acc[task] = false
      return acc
    }, {} as { [key: string]: boolean }) // Adicione uma assinatura de índice aqui
  )

  useEffect(() => {
    savedTasks
  }, [tasks])

  useEffect(() => {
    // Atualize a data atual quando o componente for montado
    setCurrentDate(getCurrentDate())
  }, [])

  useEffect(() => {
    localStorage.setItem('daily-tasks', JSON.stringify(tasks))
  }, [tasks])

  const saveTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask])
      setCurrentTask('')
    }

    if (getCurrentDate() !== currentDate) {
      setTasksSent([])
      setCheckedTasks([])
      setCurrentDate(getCurrentDate())
    }
  }

  const handleSendTasks = () => {
    selectedTasks.forEach(task => {
      if (!tasksSent.includes(task)) {
        setTasksSent([...tasksSent, task])
        setTaskSentMap(prevMap => ({
          ...prevMap,
          [task]: true
        }))
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
        selectedTasks,
        taskSentMap
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext)
}
