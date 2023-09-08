import { createContext, useContext, useEffect, useState } from 'react'

const TaskContext = createContext<any>(null)

interface ContextProps {
  children: React.ReactNode
}

export function TaskProvider({ children }: ContextProps) {
  const savedTasks = localStorage.getItem('daily-tasks')
  const [tasks, setTasks] = useState<string[]>(
    savedTasks ? JSON.parse(savedTasks) : []
  )
  const [currentTask, setCurrentTask] = useState('')

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

  return (
    <TaskContext.Provider
      value={{ tasks, saveTask, currentTask, setCurrentTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext)
}
