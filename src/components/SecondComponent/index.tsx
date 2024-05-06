import React from 'react'
import { oportunites } from './data'

function SecondComponent() {
  return (
    <div className='bg-white w-full flex flex-col items-center py-8 pb-80'>
        <div className='flex justify-between max-w-[1045px] items-center '>
            <div>
                <img className='w-[394px] h-[286px]' src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/ad0e2e2d-342c-4d68-5ee3-4b015755e700/public'} alt={'pessoas-da-impulse'}/>
            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <h2 className='text-black text-4xl font-bold font-josefin uppercase'>Você decide <small className='text-indigo-900 text-4xl font-bold uppercase'>quando</small> ganhar</h2>
                    <h2 className='text-black text-4xl font-bold font-josefin uppercase'>Você decide <small className='text-indigo-900 text-4xl font-bold uppercase'>quanto</small> ganhar</h2>
                </div>
                <p className='text-black font-normal font-poppins text-base max-w-[590px]'>
                    <strong>Mais de 94% dos brasileiros gostariam de uma renda extra,</strong> mas ou não sabem onde procurar ou não conseguem ser aceitos em nenhum trabalho.
                </p>
            </div>
        </div>
        <div className='w-[966px] pt-11 text-center text-indigo-900 text-2xl font-bold font-poppins'>
            <p>E se a gente te mostrasse extamente como vai conseguir essa renda extra e que existem oportunidades infinitas?</p>
        </div>
        <div className='flex max-w-[1156px] mt-[93px] justify-between gap-16'>
            {
                oportunites.map(({id, title, text, subtitle, img}) => (
                    <div key={id} className='w-[342px] h-[547px] bg-violet-400 rounded-[15px] border border-black px-12 pt-20 flex flex-col items-center justify-between gap-8'>
                        <div className='h-[224px] space-y-4'>
                            <p className='text-black text-xs font-bold uppercase tracking-widest font-monteserrat max-w-[216px]'>{title}</p>
                            <p className='text-black text-xs font-semibold font-montserrat'>{subtitle}</p>
                            <p className='text-black text-xs font-normal font-montserrat'>{text}</p>
                        </div>
                        {/* <img src={img} alt={`oportunidades-${id}`} className='w-[232px] h-[290px]'/> */}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SecondComponent