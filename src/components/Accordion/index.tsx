'use client'
import React, { useState } from 'react'
import { ArrowDown } from '../icons/ArrowDown'
import { ArrowUp } from '../icons/ArrowUp'

type AccordionType = {
    key?: any,
    title: string,
    content: string
}

function Accordion({key, title, content}: AccordionType) {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full bg-[#E7E7E7] rounded-md ' key={key}>
        <div 
            className="flex justify-between items-center p-6 cursor-pointer"  
            onClick={() => setIsOpen(prevState => !prevState)}
        >
            <p className='text-base lg:text-xl font-bold text-black font-poppins'>{title}</p>
            <div>{isOpen ? <ArrowUp /> : <ArrowDown />}</div>
        </div>
        {
            isOpen && (
                <div dangerouslySetInnerHTML={{ __html: content }} className='p-6 text-sm lg:text-base font-normal text-black font-poppins' />
            )
        }
    </div>
  )
}

export default Accordion