import { BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import Shop from './page/Shop'

import Cart from './page/Cart'
import Checkout from './page/Checkout'
import Confirmation from './page/Confirmation'
import { useState } from 'react'
import Login from './components/Login'
import ProductDetail from './page/ProductDetail'

function App() {

  const [order,setOrder]=useState({})

  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
        <Route path='/confirmation' element={<Confirmation order={order} />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
        
        


      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
