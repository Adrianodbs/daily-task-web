import { createContext, useContext, useEffect, useState } from 'react'
import { getCurrentDate } from '../utils/GetCurrentDate'
import { toast } from 'react-toastify'

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

  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate())

  useEffect(() => {
    savedTasks
  }, [tasks])

  useEffect(() => {
    const storedCompletedTasks = localStorage.getItem('completedTasks')
    const parsedCompletedTasks = storedCompletedTasks
      ? JSON.parse(storedCompletedTasks)
      : []

    if (getCurrentDate() !== currentDate) {
      // Limpar o localStorage "completedTasks" se a data for diferente
      localStorage.removeItem('completedTasks')
      setCurrentDate(getCurrentDate())
    } else {
      // Se a data for a mesma, definir as tarefas completas armazenadas
      setSentTasks(parsedCompletedTasks)
    }
  }, [])

  useEffect(() => {
    setCurrentDate(getCurrentDate())

    const storedCompletedTasks = localStorage.getItem('completedTasks')
    const parsedCompletedTasks = storedCompletedTasks
      ? JSON.parse(storedCompletedTasks)
      : []
    setSentTasks(parsedCompletedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('daily-tasks', JSON.stringify(tasks))
  }, [tasks])

  const saveTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask])
      toast.success(`A tarefa '${currentTask}' foi adicionada com sucesso!`)
      setCurrentTask('')
    }

    if (getCurrentDate() !== currentDate) {
      setCheckedTasks([])
      setCurrentDate(getCurrentDate())
    }
  }

  const handleSendTasks = () => {
    const completedTasks = checkedTasks.filter(
      task => !sentTasks.includes(task)
    )

    if (completedTasks.length === 0) {
      return
    }

    setSentTasks(prev => [...prev, ...completedTasks])

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
