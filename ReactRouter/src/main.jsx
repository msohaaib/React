import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from './components/Contact/Contact'
import User from './components/User/User.jsx'
// import Github from './components/Github/Github.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <LayOut />,
//     children : [
//       {
//           path : "",
//           element : <Home />
//       },
//       {
//         path : "About",
//         element : <About />
//       },
//       {
//         path : "Contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])

// OR

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route path ="" element={<Home />} />
      <Route path ="about" element={<About />} />
      <Route path ="contact" element={<Contact />} />
      <Route 
      loader= {githubInfoLoader} 
      path ="github" element={<Github />} />
      <Route path ="user/:userId" element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
