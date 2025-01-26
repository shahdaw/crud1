import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import Users from './components/users/Users.jsx';
import Create from './components/users/Create.jsx';
import Details from './components/users/Details.jsx';

export default function App() {
  return (

  <>
  <Navbar />
  <div className="container">
  <Routes>

<Route path='/' element={<Home />} />
<Route path='/users' element={<Users />} />
<Route path='/create' element={<Create />} />
<Route path='/users/:id' element={<Details />} />


<Route path='*' element={<h2>Page Not Found</h2>} />

  </Routes>
  <Footer />
  </div>
  </>

  )
}

