import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import './App.css'
import { HomeLoader } from './loaders/HomeLoader'
import Login, { LoginAction } from './views/Login'
import FilmDetail from './views/FilmDetails'
import { FilmDetailLoader } from './loaders/FilmDetailLoader'

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
  },
  {
    path: '/film/:id',
    element: <FilmDetail />,
    loader: FilmDetailLoader
  }
])
function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
