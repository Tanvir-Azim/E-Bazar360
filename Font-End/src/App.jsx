import React from "react"
import Nav from "./Nav"
import { Header } from "./Components/Header"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Pages/Home"
import Pages from "./Components/Pages/Pages"
import Blog from "./Components/Pages/Blog"
import Shop from "./Components/Pages/Shop"
import Login from "./Components/Login"
import Collections from "./Components/Pages/Collections"
import Specials from "./Components/Pages/Specials"
import Registation from "./Components/Registation"
import Compare from "./Components/CartSection/Compare"
import Fevourite from "./Components/CartSection/Fevourite"
import ShopingBag from "./Components/CartSection/ShopingBag"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pages" element={<Pages/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/collection" element={<Collections/>} />
      <Route path="/specials" element={<Specials/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registation" element={<Registation/>} />
      <Route path="/fevourite" element={<Fevourite/>} />
      <Route path="/shopingbag" element={<ShopingBag/>} />
      <Route path="/compare" element={<Compare/>} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
