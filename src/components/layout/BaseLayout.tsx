import { Outlet } from "react-router"
import Footer from "./footer/Footer"
import Header from "./header/Header"

function BaseLayout() {
  return <>
  
  <Header />

  <main className="px-3">

    <Outlet />

  </main>

  <Footer />

  </>
}

export default BaseLayout
