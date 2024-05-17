import React from 'react'
import { oportunites } from './data'

function SecondComponent() {
  return (
    <div className='bg-white w-full flex flex-col items-center lg:py-8 pb-80 lg:pb-80 px-6 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-between max-w-[1045px] items-center gap-7 lg:gap-0 mt-[-120px] lg:mt-0'>
            <div>
                <img className='w-[284px] h-[284px] lg:w-[394px] lg:h-[450px]' src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/0614b40f-a49d-4a19-3cdc-48347dc9f100/public'} alt={'pessoas-da-impulse'}/>
            </div>
            <div className='flex flex-col items-center lg:items-start gap-4'>
                <div>
                    <h2 className='text-black text-xl lg:text-4xl font-bold font-josefin uppercase'>Você decide <small className='text-indigo-900 text-xl lg:text-4xl font-bold uppercase'>quando</small> ganhar</h2>
                    <h2 className='text-black text-xl lg:text-4xl font-bold font-josefin uppercase'>Você decide <small className='text-indigo-900 text-xl lg:text-4xl font-bold uppercase'>quanto</small> ganhar</h2>
                </div>
                <p className='text-black font-normal font-poppins text-base lg:text-base max-w-[590px]'>
                    <strong>Mais de 94% dos brasileiros gostariam de uma renda extra,</strong> mas não sabem onde procurar ou não conseguem ser aceitos em nenhum trabalho.
                </p>
            </div>
        </div>
        <div className='lg:w-[966px] pt-11 text-center text-indigo-900 text-xs lg:text-2xl font-bold font-poppins'>
            <p>E se a gente te mostrasse exatamente como vai conseguir essa renda extra e que existem oportunidades infinitas?</p>
        </div>
        <div className='flex flex-col lg:flex-row max-w-[1156px] mt-6 lg:mt-[93px] justify-between gap-52 lg:gap-16'>
            {
                oportunites.map(({id, title, text, subtitle, titleHighlight, img}) => (
                    <div key={id} className='lg:w-[342px] h-[363px] lg:h-[547px] bg-violet-400 rounded-[15px] border border-black px-12 pt-20 flex flex-col items-center justify-between gap-8'>
                        <div className='h-[224px] min-h-[224px] space-y-4'>
                            <p className='text-black text-xs font-bold uppercase tracking-widest font-monteserrat max-w-[216px]'>{title} <br/> <small className='text-vivid-purple text-xs font-bold font-montserrat uppercase tracking-widest'>{titleHighlight}</small></p>
                            <p className='text-black text-xs font-semibold font-montserrat'>{subtitle}</p>
                            <p className='text-black text-xs font-normal font-montserrat'>{text}</p>
                        </div>
                        <img src={img} alt={`oportunidades-${id}`} className='w-[170px] h-[212px] lg:w-[232px] lg:h-[290px]'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SecondComponent