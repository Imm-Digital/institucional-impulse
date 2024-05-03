import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-transparent py-20 px-40">
        <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/7fe02802-a7b5-47ac-e16b-247283a67900/public'} alt='Impulse-logo' className='w-[31px] h-[19px]' />
        <div className="cursor-pointer pl-11 pr-[42px] py-3.5 bg-green-800/opacity-0 rounded-[10px] border border-white justify-center items-center inline-flex">
            <div className="text-center text-white text-base font-normal font-poppins">Começar agora</div>
        </div>
    </div>
  )
}

export default Header