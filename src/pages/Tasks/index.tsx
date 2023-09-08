import { useTaskContext } from '../../context/TaskContext'

export default function Tasks() {
  const { tasks } = useTaskContext()
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map((task: string, index: number) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}
