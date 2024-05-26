import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import ShowPerfil from "./components/showPerfil"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fetch" element={<ShowPerfil />}/>
      </Routes>
    </>
  )
}

export default App
