import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import './App.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
