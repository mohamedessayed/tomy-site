import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import BaseLayout from "./components/layout/BaseLayout"


function App() {

  return (
    <>


    <Routes>

      {/* front end for user */}

      <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
      </Route>

      
    </Routes>


    </>
  )
}

export default App
