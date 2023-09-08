import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Tasks from '../pages/Tasks'
import Dashboard from '../pages/Dashboard'

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
