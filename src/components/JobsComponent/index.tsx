'use client'
import React from 'react'
import { jobs } from './data'
import { useRouter } from 'next/navigation';

function JobsComponent() {
    const router = useRouter()
    const maxStars = 5;
    const maxDifficulty = 3;

    const getDificult: any = {
        1: '0%',
        2: '20%',
        3: '40%',
        4: '60%',
        5: '80%',
      };

  return (
    <div className='bg-white lg:py-32 flex flex-col items-center'>
        <div className='bg-[#181818] p-6 lg:p-24 lg:w-[1119px] lg:rounded-[20px] shadow flex flex-col gap-16'>
            <h3 className='px-4 text-center text-white text-2xl lg:text-3xl font-bold font-josefin uppercase leading-10'>Profissões em destaque</h3>
            <div className='flex flex-col items-center gap-16'>
            {
                jobs.map(({id, description, dificult, isHighligh, ranking, returnNumber, returnValue, title, top, url, value}) => (
                    <div key={id}>
                    <div className='bg-black/50 p-6 lg:py-11 lg:px-16 rounded-[15px] shadow-custom-drop'>
                        <div className='w-full flex flex-col lg:flex-row gap-8'>
                            <h3 className='text-white font-bold text-xl font-montserrat'>{title}</h3>
                        </div>
                        <div className='py-4 lg:py-6'>
                                <div className='text-white text-xs font-normal font-montserrat border-b border-white py-4'>{description}</div>
                                <div className='flex flex-col lg:flex-row justify-between py-6 lg:py-0 gap-4 lg:gap-0'>
                                    <div className='lg:py-4 flex flex-col lg:gap-1'>
                                        <p className='text-white text-xs font-normal font-montserrat'>Investimento: {value}</p>
                                        <p className='text-white text-xs font-normal font-montserrat'>Média de retorno: {returnValue}</p>
                                    </div>
                                    <div className='lg:py-4 flex flex-col items-start lg:items-end  z-0'>
                                        <div className='flex gap-2 items-center font-bold text-white font-montserrat text-xs z-10'>
                                            Dificuldade:
                                            <div className="relative w-20 h-4">
                                                <div style={{ left:getDificult[dificult] }} className="absolute inset-0 mt-[-32px] flex items-center text-white font-bold text-xs z-20">
                                                    {dificult}
                                                </div>
                                                <div className="absolute inset-0 w-full h-4 bg-gradient-to-r from-[#009718] to-[#EC0000]" />
                                                <div
                                                    className="absolute top-0 bottom-0 w-[1px] bg-white"
                                                    style={{ left: getDificult[dificult] }}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex gap-2 items-center font-bold text-white font-montserrat text-xs'>
                                            Retorno:
                                            <div className='flex gap-[3px]'>
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
                            <div onClick={() => router.push(`/treinamentos/${url}`)} className='border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer text-center'>Saiba mais</div>
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