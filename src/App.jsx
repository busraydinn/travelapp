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
          <Route path='/travelapp' element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='/travelapp/about' element={<About/>}></Route>
              <Route path='/travelapp/contact' element={<Contact/>}></Route>
              <Route path='/travelapp/details/:id' element={<Details/>}></Route>
              <Route path='/travelapp/*' element={<NotFound/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App