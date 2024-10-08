import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import CardDetail from './components/CardDetail'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
 const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path:'project_detail/:id',
        element: <CardDetail/>
      }
    ]
  }
 ])
useEffect(()=>{
  AOS.init();
},[])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
