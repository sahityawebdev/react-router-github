import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter ,createRoutesFromElements,Route,Router,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Github from './Components/Github.jsx'



//<------------------First Method--------------->












// <---------------------Second Method------------->

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
      
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//       {
//         path: "/github",
//         element: <Github/>
//       },
    
//     ],
//   },
// ]);


// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
  
// )



//<--------------------Third Method------------->


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
   <Route path="/" element={<App />}>
   <Route path="" element={<Home />}/>
   <Route path="about" element={<About />}/>
   <Route path="contact" element={<Contact />}/>
   <Route path="github" element={<Github />}/>
    </Route>
   </>
  )
);

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>)
