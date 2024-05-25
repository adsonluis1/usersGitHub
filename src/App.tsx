import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/home"

function App() {
  

  return (
    <>
      <Header />
      <Home />

      <Routes>
        <Route path="/"/>
      </Routes>
    </>
  )
}

export default App
