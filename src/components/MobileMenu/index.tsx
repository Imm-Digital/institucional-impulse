'use client'
import React, { useState } from 'react'
import { HamburguerMenuIcon } from '../icons/HamburguerMenu'
import { CloseIcon } from '../icons/CloseIcon'

function MobileMenu() {
    const [isOpen, setIsOpen ] = useState<any>()

  return (
    <div>
        <div 
            onClick={() => setIsOpen((prevState: any) => !prevState)}
            className='w-[30px] h-[30px] flex justify-center items-center'
        >
            {isOpen ? <HamburguerMenuIcon /> : <CloseIcon />}
        </div>
    </div>
  )
}

export default MobileMenu