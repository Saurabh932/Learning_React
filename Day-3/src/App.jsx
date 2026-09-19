import React from 'react'
import Cards from './components/Cards.jsx'

const App = () => {
  return (
    <div className="parent">
      <Cards img="https://images.unsplash.com/photo-1789464093707-1bfb21308422?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" user="Saurabh" last="Mandhalkar" exp={1} />
      <Cards img="" user="Saurabh" last="Mandhalkar"  />
      <Cards img="" user="Saurabh" last="Mandhalkar"  />
      <Cards img="" user="Saurabh" last="Mandhalkar"  />
      <Cards img="" user="Saurabh" last="Mandhalkar"  />
    </div>
  )
}

export default App
