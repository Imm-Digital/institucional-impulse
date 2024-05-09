import React from 'react'
import { jobs } from './data'

function JobsComponent() {
  return (
    <div className='bg-white lg:py-32 flex flex-col items-center'>
        <div className='bg-[#0D0D0D] p-6 lg:p-24 lg:w-[1119px] lg:rounded-[20px] shadow flex flex-col gap-16'>
            <h3 className='px-4 text-center text-white text-2xl lg:text-3xl font-bold font-josefin uppercase leading-10'>Profissões em destaque</h3>
            <div className='flex flex-col items-center gap-16'>
            {
                jobs.map(({id, title, description, value, returnValue, dificult, returnNumber, moreValue, ranking}) => (
                    <div key={id}>
                        <div className='bg-black p-6 lg:py-11 lg:px-16 rounded-[15px] shadow'>
                            <div className='flex flex-col lg:flex-row justify-between max-w-[500px]'>
                                <div className='text-white font-bold text-xl font-montserrat'>{title}</div>
                            </div>
                            <div className='py-4 lg:py-6'>
                                <div className='text-white text-xs font-normal font-montserrat border-b border-white py-4'>{description}</div>
                                <div className='flex flex-col lg:flex-row justify-between py-6 lg:py-0 gap-4 lg:gap-0'>
                                    <div className='lg:py-4 flex flex-col lg:gap-1'>
                                        <p className='text-white text-xs font-normal font-montserrat'>Investimento: {value}</p>
                                        <p className='text-white text-xs font-normal font-montserrat'>Média de retorno: {returnValue}</p>
                                    </div>
                                    <div className='lg:py-4 flex flex-col lg:gap-1'>
                                        <div className='font-bold text-white font-montserrat text-xs'>Dificuldade: {dificult}</div>
                                        <div className='font-bold text-white font-montserrat text-xs'>Retorno: {returnNumber}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0'>
                                <div className='flex lg:justify-between max-w-[200px] items-center gap-2'>
                                    <p className='text-green-700 text-xs font-bold font-montserrat'>Ranking geral: {ranking}</p>
                                </div>
                                <div className='border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer text-center'>Saiba mais</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default JobsComponent