import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './layout/app'
import { SignUp } from './pages/auth/sign-up'
import { LandingPage } from './pages/app/landing-page'

export const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
])

export const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
])
