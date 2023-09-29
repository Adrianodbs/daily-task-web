import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Tasks from '../pages/Tasks'
import Dashboard from '../pages/Dashboard'
import Header from '../components/Header'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function RouterApp() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
