'use client'
import React from 'react'
import { jobs } from './data'
import { useRouter } from 'next/navigation';

function JobsComponent() {
    const router = useRouter()
    const maxStars = 5;
    const maxDifficulty = 3;

    const getDificult: any = {
       1 : '0px',
       2 : '22px',
       3 : '44px',
       4 : '66px',
       5 : '91px', 
    };

  return (
    <div className='bg-white lg:py-32 flex flex-col items-center'>
        <div className='bg-[#0D0D0D] p-6 lg:p-24 lg:w-[1119px] lg:rounded-[20px] shadow flex flex-col gap-16'>
            <h3 className='px-4 text-center text-white text-2xl lg:text-3xl font-bold font-josefin uppercase leading-10'>Profissões em destaque</h3>
            <div className='flex flex-col items-center gap-16'>
            {
                jobs.map(({id, description, dificult, isHighligh, ranking, returnNumber, returnValue, title, top, url, value}) => (
                    <div key={id}>
                    <div className='bg-black p-6 lg:py-11 lg:px-16 rounded-[15px] shadow'>
                        <div className='w-full flex flex-col lg:flex-row gap-8'>
                            <h3 className='text-white font-bold text-xl font-montserrat'>{title}</h3>
                        </div>
                        <div className='py-4 lg:py-6'>
                            <div className='text-white text-xs font-normal font-montserrat border-b border-white py-4'>{description}</div>
                            <div className='flex flex-col lg:flex-row justify-between py-6 lg:py-0 gap-4 lg:gap-0'>
                                <div className='lg:py-4 flex flex-col lg:gap-1'>
                                    <p className='text-white text-xs font-normal font-montserrat'>Investimento: {value}</p>
                                    <p className='text-white text-xs font-normal font-montserrat'>Média de serviço: {returnValue}</p>
                                </div>
                                <div className='lg:py-4 flex flex-col lg:gap-1'>
                                    <div className='flex gap-2 items-center font-bold text-white font-montserrat text-xs'>Retorno: 
                                        <div className="w-20 h-4 overflow-hidden border relative">
                                            <div className={`right-[${getDificult[dificult]}]  absolute h-4 w-[1px] bg-white`} />
                                            <div className="w-[91px] h-4 bg-gradient-to-r from-green-700 to-red-600" />
                                        </div>
                                    </div>
                                    <div className='flex gap-2 items-center font-bold text-white font-montserrat text-xs'>Retorno:
                                        <div>
                                            {Array.from({ length: maxStars }, (_, i) => (
                                                <span key={i} className={`text-lg ${i < returnNumber ? 'text-white' : 'text-gray-500'}`}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0'>
                            <div className='flex lg:justify-between max-w-[200px] items-center gap-2'>
                                <div className='flex gap-2 items-center text-green-700 text-xs font-bold font-montserrat'>Ranking: 
                                <div>
                                            {Array.from({ length: maxStars }, (_, i) => (
                                                <span key={i} className={`text-lg ${i < returnNumber ? 'text-white' : 'text-gray-500'}`}>★</span>
                                            ))}
                                </div>
                                </div>
                            </div>
                            <div onClick={() => router.push(`/${url}`)} className='border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer text-center'>Saiba mais</div>
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