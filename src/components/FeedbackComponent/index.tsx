import React from 'react'
import { depoiments } from './data'

function FeedbackComponent() {
  return (
    <div className='w-full flex items-center justify-center bg-white'>
        <div className='flex flex-col px-9 lg:px-0 lg:flex-row w-full lg:max-w-[912px] py-24 gap-20'>
            {
                depoiments.map(({depoiment, name, product, id, image}) => (
                    <div key={id} className='lg:max-w-[236px] flex flex-col items-center gap-8'>
                        <p className='text-sm font-medium text-black font-inter font-montserrat text-shadow-feedback text-center'>{depoiment}</p>
                        <div className='w-full flex flex-col items-center gap-4'>
                            <p className='text-black text-xs font-bold uppercase font-montserrat tracking-widest'>{name}</p>
                            <img src={image} className='w-[30px] h-[30px] rounded-md' />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeedbackComponent