import React from 'react'

function Footer() {
  return (
    <div className='bg-vivid-purple py-11 px-20 w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>
      <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/7fe02802-a7b5-47ac-e16b-247283a67900/public'} alt='Impulse-logo' className='w-[31px] h-[19px]' />
      <p className='text-right text-white text-xs lg:text-[15px] font-normal font-poppins leading-[30px] cursor-pointer'>Termos de uso e políticas de privacidade</p>
    </div>
  )
}

export default Footer