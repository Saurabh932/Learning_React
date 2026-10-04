import React, { useState  } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("title: "+title+"\ndetails: "+details)

    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)
    console.log(copyTask)

    setTitle("")
    setDetails("")
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)

    console.log("delete note")

  }

  return (
      <div className='h-screen lg:flex bg-black text-white'>        
        <form className='flex flex-col lg:w-[40%] items-start gap-4 p-15' onSubmit={submitHandler}>
          <h1 className="text-4xl mb-6 font-bold">Add Notes</h1>
          <input className='px-5 py-3 mb-3 w-full font-medium border-2 outline-none rounded'
                type="text" 
                placeholder="Enter Notes Heading"
                value={title}
                onChange={(e) =>{
                  setTitle(e.target.value)
                }} />

          <textarea className='px-5 h-70 mb-5 py-2 w-full font-medium border-2 outline-none rounded'
                type="text"
                placeholder="Enter Details" 
                name=""
                id=""
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value)
                }} />

          <button className='bg-white active:bg-gray-300 text-black px-5 py-2 font-medium rounded'>
            Add Notes
          </button>
        </form>

        <div className="lg:w-[60%] lg:border-l-2 p-15">
          <h1 className="text-4xl font-bold">Recent Notes</h1>
          
          <div className="flex flex-wrap gap-6 mt-10 h-[90%] items-start justify-start overflow-auto">
            { task.map(function(elem, idx){
              return <div key={idx} className="flex flex-col justify-between items-start h-72 w-68 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/024/584/452/small/blank-space-white-sticky-note-png.png')] text-black pt-12 pb-4 px-6">
                <div>
                  <h3 className="leading-tight text-xl font-bold">{ elem.title }</h3>
                  <p className="mt-4 font-medium text-gray-500 leading-tight">{ elem.details }</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                  }} className="w-1/2 bg-red-500 active:bg-red-400 py-2 text-s rounded-2xl text-white font-bold">
                  Delete
                </button>
              </div> 
            })}
          </div>
        </div>
      </div>

)
}

export default App
