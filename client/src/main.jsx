import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import App from './App.jsx'
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import ProfileTemp from './pages/profileScaffold.temp.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import NewPost from './pages/NewPost.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Forum />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/me',
        element: <Profile />
      }, {
        path: '/profiles/:profileId',
        element: <Profile />
      },
      {
        path: '/profileTemp',
        element: <ProfileTemp />
      },
      {
        path:  '/NewPost',
        element: <NewPost/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
