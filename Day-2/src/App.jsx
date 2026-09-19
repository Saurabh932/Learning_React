import React from 'react'
import Card from './components/cards.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      {<Navbar />}
      {<Card />}
      {<Footer />}
    </>
  )
}

export default App
