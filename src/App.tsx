import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Users } from "./features/users/users"
import { EditUser } from "./utils/edit-user"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Users />}
          />
          <Route
            path="/edit/:id"
            element={<EditUser />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
