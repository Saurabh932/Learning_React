// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState({user:'Saurabh', age:24})

//   const btnClick = () => {
//     // setNum(20)
//     // console.log(num)

//     // const newNum = {...num}

//     setNum(prev=>({...prev, age:50}))
//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClick}>Click</button>
//     </div>
//   )
// }

// export default App



import React,  { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const subitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted by ' + title)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={subitHandler}>
        <input type="text"
               placeholder="Enter your name"
               value={title}
               onChange={(e) => {
                setTitle(e.target.value)
               }} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
