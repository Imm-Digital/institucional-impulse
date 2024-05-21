'use client'
import React, { useState } from 'react'
import { HamburguerMenuIcon } from '../icons/HamburguerMenu'
import { CloseIcon } from '../icons/CloseIcon'
import Link from 'next/link'

function MobileMenu() {
    const [isOpen, setIsOpen ] = useState<any>()

  return (
    <div className='flex justify-end'>
      {
        isOpen && (
          <div className={`mt-2 ${isOpen ? 'bg-[#0A0020]/70 shadow to-[#412879] max-w-[188px] rounded-b-lg w-full flex flex-col absolute top-[24px]' : 'hidden'}`}>
          <Link 
              target='_blank'
              href='https://grupoimpulse.cademi.com.br/auth/login'
              className="hover:bg-vivid-purple/20 w-full cursor-pointer py-4 justify-center items-center inline-flex">
            <div className="text-center text-white text-base font-normal font-poppins">Área de membros</div>
          </Link>
          <Link
              target='_blank'
              href='https://faleconoscoimpulse.com/' 
              className="hover:bg-vivid-purple/20 w-full rounded-b-lg cursor-pointer py-4 justify-center items-center inline-flex">
            <div className="text-center text-white text-base font-normal font-poppins">Central de ajuda</div>
          </Link>
        </div>
        )
      }
        <div 
            onClick={() => setIsOpen((prevState: any) => !prevState)}
            className='w-[30px] h-[30px] flex justify-center items-center'
        >
            {isOpen ? <CloseIcon /> : <HamburguerMenuIcon />}
        </div>
    </div>
  )
}

export default MobileMenu