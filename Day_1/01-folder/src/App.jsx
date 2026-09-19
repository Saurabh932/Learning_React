import React from 'react'

const App = () => {
  return (
    // Instead of using extra div which look extra in dev tools, instead use empty wrapper <> < />
    <>
      <div id='parent'>
        <h1 id='child1'>Hello, World!</h1>
        <h2 id='child2'>Welcome!</h2>
      </div>
      <div id='parent2'>
            <h3 id='child3'>Nice</h3>
      </div>
    </>
  )
}

export default App
