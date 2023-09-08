import { createContext, useContext } from 'react'

const TaskContext = createContext<any>(null)

interface ContextProps {
  children: React.ReactNode
}

export function TaskProvider({ children }: ContextProps) {
  const addTask = () => {
    console.log('add')
  }
  return (
    <TaskContext.Provider value={{ addTask }}>{children}</TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext)
}
