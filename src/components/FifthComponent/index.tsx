import React from 'react'
import { homeDepoiments } from '../HomeComponent/data'
import VideoPlayer from '../VideoPlayer'

function FifthComponent() {
  return (
    <div className='bg-white flex flex-col items-center gap-24 py-16 pb-40'>
      <h2 className='max-w-[780px] text-center text-black text-base lg:text-3xl font-bold font-josefin uppercase'>Escute de quem já está ganhando dinheiro através da internet...</h2>
      <div className='overflow-scroll lg:overflow-auto w-full flex gap-9 lg:gap-20 px-9 lg:px-0 lg:pl-[10%] 2xl:pl-[20%]'>
        {
            homeDepoiments.map(({ id, name, depoiment, vslId, isHorizontal }) => (
                <div key={id} className='flex flex-col gap-4'>
                <div  className={`flex flex-col justify-end w-full ${isHorizontal ? 'w-[740px]' : 'w-[287px]'} h-[410px] bg-white`}>
                    <VideoPlayer vslId={vslId} {...{ isHorizontal}}/>
                </div>
                    <div className='w-full min-w-[250px] bg-[#0A0020CC] p-6 rounded-xl flex flex-col justify-between'>
                        <p className='text-gray-200 text-xs font-semibold font-poppins'>{name}</p>
                        <p className='text-gray-200 text-xs font-normal font-poppins'>{`${depoiment}`}</p>
                    </div>
                </div>
            ))
        }
    </div>
  </div>
  )
}

export default FifthComponent