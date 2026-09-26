// const App = () => {

//   function btnClicked(){
//     console.log("Button is clicked.")
//   }
//   return (
//     <div>
//        <button onClick={btnClicked}>Click here</button>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>
      <button onClick={() => {
        console.log('Button Clicked');
      }}>
        Click Here!
      </button>
    </div>
  )
}

export default App
