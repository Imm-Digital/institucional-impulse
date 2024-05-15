import React from 'react'
import { depoiments } from './data'

function FeedbackComponent() {
  return (
    <div className='w-full flex items-center justify-center bg-white'>
        <div className='flex flex-col lg:flex-row w-full lg:max-w-[912px] py-24 gap-20'>
            {
                depoiments.map(({depoiment, name, product, id, image}) => (
                    <div key={id} className='lg:max-w-[236px] flex flex-col items-center justify-between gap-8'>
                        <p className='text-sm font-medium text-black font-inter font-montserrat text-shadow-lg'>{depoiment}</p>
                        <div className='w-full flex lg:flex-col items-center gap-4'>
                            <img src={image} className='w-[40px] h-[40px] rounded-md' />
                            <p className='text-sm text-black text-xs font-bold uppercase font-montserrat'>{name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeedbackComponent