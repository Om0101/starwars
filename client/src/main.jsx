import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import App from './App.jsx'
import CardInfo from './Components/CardInfo.jsx'
import {createBrowserRouter} from 'react-router-dom'

const Router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'detail',
    children:[
      {
        path:':name',
        element:<CardInfo/>

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={Router}>
    
    <App />
    </RouterProvider>

)
