import React from 'react'

const App = () => {
  
  // localStorage.setItem("name", "John Doe");
  // localStorage.removeItem("name");
  // localStorage.clear();
  // const name = localStorage.getItem("name");

  const user = {
    name: "John Doe",
    age: 30,
    city: "New York"
  }
  
  localStorage.setItem('user', JSON.stringify(user));

  return ( 
    <div>
      <p>Hello, {name}!</p>
    </div>
  )
}

export default App
