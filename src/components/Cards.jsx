import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full  max-h-96 overflow-auto flex justify-center gap-4  flex-wrap-4'>
        {users.map((item, index)=>{
            return <Card handleRemove={handleRemove} id={index} user={item}/>
        })}  
    </div>
  )
}

export default Cards