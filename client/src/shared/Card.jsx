


import React from 'react'
import { Link } from 'react-router-dom'

function Card({
title,image,price,_id
}) {
  return (
    <div className='h-[200px] shadow flex justify-center items-center flex-col border p-2'>

        <Link to={`/product/${_id}`} >
            
            <div>
                <img src={''}  className='h-[130px]'/> 
            </div>


            <div className='flex  justify-between items-center border w-full h-[70px]'>
                <div>
                    <h2>{title}</h2>
                    <b>${price}</b>

                </div>
               <div>
                 <button className='btn'>Add to Cart</button>
               </div>
            </div>




        </Link>



    </div>
  )
}

export default Card