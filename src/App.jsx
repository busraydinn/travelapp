import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from './Landing/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/details/:id' element={<Details/>}></Route>
              <Route path='/*' element={<NotFound/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App