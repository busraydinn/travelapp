import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Card(props) {

    const navigate=useNavigate();
     
  return (
    <div className='sm:h-60 sm:w-40  rounded-xl  border border-gray-300 md:w-60 md:h-70 flex flex-col p-2 hover:border-blue-500 cursor-pointer   ' onClick={()=>navigate(`/travelapp/details/${props.id}`)}>
        <img src={props.photo} className='rounded-xl '/>
        <div className='flex flex-row justify-between items-center p-2'>
            <h1 className='font-bold'>{props.name}</h1>
             <strong className="text-gray-900 font-bold">⭐{props.rating}</strong>
        </div>
        <p className='text-[11px] font-bold text-gray-400 '># {props.tags}</p>
        <p className='text-slate-600 text-md '>{props.description}</p>
    </div>
  )
}

export default Card