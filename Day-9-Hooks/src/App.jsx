// const App = () => {
//   let a = 10;

//   function changeA() {
//     console.log(a)
//     a = 30;
//     console.log(a)
//   }
//   return (
//     <div onClick={changeA}>
//       <h1>Value of a is {a}</h1>
//       <button>Click Here</button>
//     </div>
//   )
// }

// export default App



// import { useState } from "react"

// const App = () => {

//   const [num, setNum] = useState(20)
  
//   function changeNum() {
//     setNum(50)
//       console.log("hello");
//   }

//   return (
//     <div>
//        <h1>Value of a is {num}</h1>
//        <button onClick={changeNum}>Click Here</button>
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increase() {
    console.log('increasing')
    setNum(num+1)
  }

  function decrease() {
    console.log('decreasing')
    setNum(num-1)
  }

  function jump(){
    console.log('jumping by 5')
    setNum(num+5)
  }

  return (
    <div>
      <div className='main'>
        <h1 className='counter'>{num}</h1>
        <div className='btn'>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={jump}>Jump by 5</button>
        </div>
      </div>
    </div>
  )
}

export default App
