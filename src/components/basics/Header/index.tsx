import MobileMenu from '@/components/MobileMenu'
import { useResizeScreen } from '@/context/resizeScreen'
import Image from 'next/image'
import React from 'react'

type HeaderType = {
  isHomePage?: boolean
  handleScroll?: any
}

function Header({isHomePage, handleScroll}: HeaderType) {
  const { isMobile } = useResizeScreen()

  return (
    <div className="w-full flex flex-row justify-between items-center bg-transparent py-8 px-6 lg:py-20 lg:px-40">
        <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/7fe02802-a7b5-47ac-e16b-247283a67900/public'} alt='Impulse-logo' className='w-[31px] h-[19px]' />
        {
          isHomePage ? (
                isMobile ? ( <div><MobileMenu /></div> ) : (
                  <div className='flex gap-20 items-center'>
                  <div className='flex gap-6'>
                    <div className="cursor-pointer px-4 lg:px-6 py-4 bg-vivid-purple rounded-[10px] justify-center items-center inline-flex">
                        <div className="text-center text-white text-base font-normal font-poppins">Login Aluno</div>
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