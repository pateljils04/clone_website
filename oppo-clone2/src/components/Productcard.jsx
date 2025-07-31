import React from 'react'
import { Link } from 'react-router-dom'

function Productcard({product}) {
    
    return (
        <div className=' ' key={product.id}>
            <div className="pr-img bg-[whitesmoke] pt-[70px] pb-[70px]">
               <Link to={`/description/${product.id}`}><img className='mx-auto' src={product.image} height={170} width={170} alt="wait for Loading..." /></Link> 
            </div>
            <div className="cont-img mt-4">
                <h3 className='pb-2 font-medium'>{product.title}</h3>
                <p className='pb-2'>{product.description}</p>

                <a href="" className='text-sm underline'>Learn more</a>
                <a href="" className='text-sm ms-4 underline'>Buy now</a>
            </div>
        </div>

    )
}

export default Productcard
