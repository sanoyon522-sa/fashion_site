import { createBrowserRouter } from "react-router"
import Layout from "../Layout/Layout"
import HomePage from "../pages/HomePage"
import Caps from "../pages/caps"
import DropshoulderHoodie from "../pages/DropshoulderHoodie"
import Hoodie from "../pages/Hoodie"
import SweatShirt from "../pages/SweatShirt"
import Wallet from "../pages/Wallet"
import Shows from "../pages/Shoes"
import Buycaps from "../BuyItems/Buycaps"




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/caps',
        element: <Caps />
      },
      {
        path: '/dropshoulderhoodie',
        element: <DropshoulderHoodie />
      },
      {
        path: '/hoodie',
        element: <Hoodie />
      },
      {
        path: '/sweatshirt',
        element: <SweatShirt />
      },
      {
        path: '/wallet',
        element: <Wallet />
      },
      {
        path: '/shoes',
        element: <Shows />
      },
      {
        path: '/allcaps'
      },
      {
        path: '/'
      }

    ],

  }

]);

export default router