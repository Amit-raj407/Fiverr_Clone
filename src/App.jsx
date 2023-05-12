import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import Gigs from './pages/gigs/Gigs.jsx'
import Gig from './pages/gig/Gig.jsx'
import Add from './pages/add/Add.jsx'
import Orders from './pages/orders/Orders.jsx'
import Messages from './pages/messages/Messages.jsx'
import Message from './pages/message/Message.jsx'
import MyGigs from './pages/myGigs/MyGigs.jsx'


import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {

  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/messages",
          element: <Messages />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <h1>Start From 44:20 Featured Component Design</h1>
    </>
  )
}

export default App
