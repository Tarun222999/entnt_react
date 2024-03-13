import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar"
import './App.css';
import OrderCalender from "./pages/OrderCalender"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>

    )

  },
  {
    path: "/products",
    element: (
      <>
        <Navbar />
        <Products />
      </>

    )
  },
  {
    path: "/orders",
    element: (
      <>
        <Navbar />
        <Orders />
      </>

    )
  },
  {
    path: '/ordercalender',
    element: (
      <>
        <Navbar />
        <OrderCalender />
      </>
    )
  }
])
function App() {


  return (
    <>

      <RouterProvider router={router} />
    </>


  )
}

export default App
