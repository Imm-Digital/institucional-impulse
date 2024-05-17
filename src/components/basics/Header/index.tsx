'use client'
import MobileMenu from '@/components/MobileMenu'
import { useResizeScreen } from '@/context/resizeScreen'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type HeaderType = {
  isHomePage?: boolean
  handleScroll?: any
}

function Header({isHomePage, handleScroll}: HeaderType) {
  const router = useRouter()
  const { isMobile } = useResizeScreen()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = (value: string) => {
    router.push(value)
  }

  return (
    <div className="w-full flex flex-row justify-between items-center bg-transparent py-8 px-6 lg:py-20 lg:px-40">
        <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/7fe02802-a7b5-47ac-e16b-247283a67900/public'} alt='Impulse-logo' className='w-[31px] h-[19px]' />
        {
          isHomePage ? (
                isMobile ? ( <div><MobileMenu /></div> ) : (
                  <div className='flex gap-20 items-center'>
                  <div className='flex gap-6'>
                    <div className=" flex flex-col cursor-pointer px-4 lg:px-11 py-4 bg-vivid-purple rounded-[10px] justify-center items-center " onClick={toggleMenu}>
                      <div className="text-center text-white text-base font-normal font-poppins">Área do Aluno</div>
                      <div className={`mt-2 ${isOpen ? 'bg-[#0A0020]/70 shadow to-[#412879] max-w-[188px] rounded-b-lg w-full flex flex-col absolute top-[126px]' : 'hidden'}`}>
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
                    </div>
                    <div className="cursor-pointer px-4 lg:px-9 py-3.5 rounded-[10px] border border-white justify-center items-center inline-flex">
                      <div onClick={() => handleScroll()} className="text-center text-white text-base font-normal font-poppins">Melhores oportunidades</div>
                    </div>
                  </div>
                </div>
                )
          ) : (
            <div className="cursor-pointer px-4 lg:px-11 py-3.5 rounded-[10px] border border-white justify-center items-center inline-flex">
                <div onClick={() => handleScroll()} className="text-center text-white text-base font-normal font-poppins">Ver melhores oportunidades</div>
            </div> 
          )
        }
    </div>
  )
}

export default Header