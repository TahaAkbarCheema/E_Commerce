import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './layout/Navigation'
import Services from './pages/Services'
import ContactUs from './pages/Contactus'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import SingleProduct from './layout/SingleProduct'
//import './css/style.css'
const App = () => {
  return (

    <BrowserRouter>

      <Navigation />
      <Container className='my-container'>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contactus' element={<ContactUs />} />

<Route path='/product/:id' element={<SingleProduct/>}/>
        </Routes>
      </Container>
    </BrowserRouter>

  )
}

export default App
