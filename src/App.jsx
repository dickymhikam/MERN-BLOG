import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Detail from "./pages/detailBlog/detail"
import Create from "./pages/createBlog/create"





const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/createBlog" element={<Create/>}/>
            <Route path="/detailBlog" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

