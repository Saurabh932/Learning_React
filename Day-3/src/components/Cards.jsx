import React from 'react'

const Cards = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <img src={props.img} alt="Profile" />
        {/* <h1>Saurabh Mandhalkar</h1> */}
        <h1>{props.user} {props.last}</h1>
        <br />
        <h4>Experience: {props.exp} years</h4>

        <button>
          View Profile
        </button>
    </div>
  )
}

export default Cards
