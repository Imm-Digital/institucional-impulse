'use client'
import React from 'react'
import { GraphIcon } from '../icons/graphIcon'
import { products } from './data'
import { useRouter } from 'next/navigation'

function ThirdComponent() {
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
    <div className='bg-[#181818] flex flex-col lg:items-center min-h-screen px-0 py-0'>
        <div className='lg:w-[1268px] lg:h-[358px] py-6 px-6 lg:py-0 lg:px-0 shadow-inner bg-oportunites bg-cover lg:mt-[-140px] bg-no-repeat'>
            <div className='w-full lg:px-[162px] lg:pt-[104px] flex flex-col gap-4'>
                <p className='text-white text-base lg:text-3xl font-bold font-montserrat lowercase'>as melhores</p>
                <p className='text-white text-2xl lg:text-3xl font-bold font-montserrat uppercase tracking-[6px]'>Oportunidades <br/> de renda</p>
            </div>
        </div>
        <div className='w-full flex flex-col gap-12 max-w-[930px] py-8 lg:py-16 px-6'>
            {
                products?.map(({id, description, dificult, isHighligh, ranking, returnNumber, returnValue, title, top, url, value}) => (
                    <div key={id}>
                        {
                            isHighligh &&                         
                            <div className='text-white text-xl items-center font-semibold font-poppins leading-[30px] flex gap-2 mb-4'>
                                <GraphIcon />
                                Em destaque
                            </div>
                        }
                        <div className='bg-black p-6 lg:py-11 lg:px-16 rounded-[15px] shadow'>
                            <div className='w-full flex flex-col lg:flex-row gap-8'>
                                <h3 className='text-white font-bold text-xl font-montserrat'>{title}</h3>
                                { isHighligh && <div className='w-[198px] h-8 bg-green-700 rounded-md text-white text-[15px] font-bold flex items-center justify-center'>{top}</div>}
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
                                    <p className='flex gap-2 items-center text-green-700 text-xs font-bold font-montserrat'>Ranking: 
                                    <div>
                                                {Array.from({ length: maxStars }, (_, i) => (
                                                    <span key={i} className={`text-lg ${i < returnNumber ? 'text-white' : 'text-gray-500'}`}>★</span>
                                                ))}
                                    </div>
                                    </p>
                                </div>
                                <div onClick={() => router.push(`/treinamentos/${url}`)} className='border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer text-center'>Saiba mais</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ThirdComponent