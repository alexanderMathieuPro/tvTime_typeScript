import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import './App.css'
import { HomeLoader } from './loaders/HomeLoader'
import Header from './components/Header'
import Login, { LoginAction } from './views/Login'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: HomeLoader,
  },
  {
    path: '/login',
    element: <Login />,
    action: LoginAction,
  }
])
function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
