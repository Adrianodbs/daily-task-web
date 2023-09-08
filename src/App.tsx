import { TaskProvider } from './context/TaskContext'
import RouterApp from './routes'

function App() {
  return (
    <TaskProvider>
      <RouterApp />
    </TaskProvider>
  )
}

export default App
