import React from 'react'
import { jobs } from './data'

function JobsComponent() {
  return (
    <div className='bg-white py-32 flex flex-col items-center'>
        <div className='bg-[#0D0D0D] p-24 w-[1119px] rounded-[20px] shadow flex flex-col gap-16'>
            <h3 className='text-center text-white text-3xl font-bold font-josefin uppercase leading-10'>Profissões em destaque</h3>
            <div className='flex flex-col items-center gap-16'>
            {
                jobs.map(({id, title, description, value, returnValue, dificult, returnNumber, moreValue, ranking}) => (
                <div className='bg-black py-11 px-16 rounded-[15px] shadow' key={id}>
                    <div className='flex justify-between max-w-[500px]'>
                        <div className='text-white font-bold text-xl font-montserrat'>{title}</div>
                    </div>
                        <div className='py-6'>
                            <div className='text-white text-xs font-normal font-montserrat border-b border-white py-4'>{description}</div>
                                <div className='flex justify-between'>
                                    <div className='py-4 flex flex-col gap-1'>
                                        <p className='text-white text-xs font-normal font-montserrat'>Investimento: {value}</p>
                                        <p className='flex gap-2 text-white text-xs font-normal font-montserrat'>Possibilidade de retorno mensal: {returnValue}  
                                            {/* <div className='w-[55px] h-[15px] bg-green-700 rounded-[3px] p-1 text-center text-white text-xs font-bold font-montserrat'>{moreValue}</div> */}
                                        </p>
                                    </div>
                                    <div className='py-4 flex flex-col gap-1 items-end'>
                                        <div className='font-bold text-white font-montserrat text-xs'>Empenho necessário: {dificult}</div>
                                        <div className='font-bold text-white font-montserrat text-xs'>Retorno: {returnNumber}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex justify-between max-w-[200px] items-center gap-2'>
                                        <p className='text-green-700 text-xs font-bold font-montserrat'>Ranking geral: {ranking}</p>
                                </div>
                            <div className='border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer'>Saiba mais</div>
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