import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import BaseLayout from "./components/layout/BaseLayout"
import Login from "./pages/Login"
import UserContextProvider from "./context/userContext";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./middleware/ProtectedRoute";

function App() {

  return (
    <>



      <UserContextProvider>

        <Routes>

          {/* front end for user */}





          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />

            <Route path="/login" element={<Login />} />

            

            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

            

          </Route>



        </Routes>

      </UserContextProvider>

    </>
  )
}

export default App
