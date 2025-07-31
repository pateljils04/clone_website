import React from 'react'

function Smartphonescard({smart}) {
    // console.log(smart)
  return (
             <div className="divide-item1 pb-5" key={smart.id}>
              <div className="divide-imgBox mb-4">
                <img className="mx-auto sm:mx-0" src={smart.image} height={200} width={200} alt="" />
              </div>
              <div className="divide cont text-center sm:text-left">
                <h3 className='text-lg font-medium'>{smart.title}</h3>
                <p>{smart.discount}</p>
                <p className='inline'>{smart.price}</p> 
                <p className='inline text-gray-500 line-through ms-1'>{smart.cutp}</p>
                <div><a href=""  className='text-sm underline' >learn more</a>
                <a href=""  className='text-sm underline ms-3'>Buy now</a></div>
              </div>
            </div>  
  )
  
}

export default Smartphonescard
