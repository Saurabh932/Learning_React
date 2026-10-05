import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  useEffect(function() {
    console.log('UseEffect called')
  }, [])

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}>
        Click Here
      </button>
    </div>
  )
}

export default App
