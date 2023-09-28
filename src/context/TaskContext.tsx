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
  const selectedTasks = tasks.filter(task => checkedTasks.includes(task))

  const [sentTasks, setSentTasks] = useState<string[]>([])

  const [currentDate, setCurrentDate] = useState<string>('')

  useEffect(() => {
    savedTasks
  }, [tasks])

  useEffect(() => {
    setCurrentDate(getCurrentDate())

    const storedCompletedTasks = localStorage.getItem('completedTasks')
    const parsedCompletedTasks = JSON.parse(storedCompletedTasks) || []

    setSentTasks(parsedCompletedTasks)
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
      setCheckedTasks([])
      setCurrentDate(getCurrentDate())
    }
  }

  const handleSendTasks = () => {
    const completedTaskIndexes = selectedTasks
      .map((isChecked, index) => (isChecked ? index : null))
      .filter(index => index !== null)

    const completedTasks = completedTaskIndexes.map(index => tasks[index])

    setSentTasks([...sentTasks, ...completedTasks])

    saveCompletedTasksToStorage(completedTasks)
  }

  const saveCompletedTasksToStorage = (completedTasks: string[]) => {
    try {
      const storedCompletedTasks =
        localStorage.getItem('completedTasks') || '[]'
      const parsedCompletedTasks = JSON.parse(storedCompletedTasks)

      const updatedCompletedTasks = [...parsedCompletedTasks, ...completedTasks]

      localStorage.setItem(
        'completedTasks',
        JSON.stringify(updatedCompletedTasks)
      )
    } catch (error) {
      console.error('Erro ao salvar tarefas concluídas no LocalStorage', error)
    }
  }

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
        saveCompletedTasksToStorage,
        sentTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext)
}
