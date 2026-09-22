import React from 'react'
import {ArrowRight} from 'lucide-react'


const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl rounded-full h-12 w-12 font-semibold flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-l leading-relaxed text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem incidunt, maxime sapiente velit excepturi dolorem cupiditate explicabo labore dolorum eum?</p>
            <div className='flex justify-between '>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>
                {props.tag}
            </button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><ArrowRight color="#ffff" /></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
