import React from 'react'
import { GraphIcon } from '../icons/graphIcon'
import { products } from './data'

function ThirdComponent() {
  return (
    <div className='bg-[#181818] flex flex-col items-center min-h-screen'>
        <div className='w-[1268px] h-[358px] rounded-[20px] shadow-inner bg-oportunites mt-[-140px]'>
            <div className='w-full px-[162px] pt-[104px] flex flex-col gap-4'>
                <p className='text-white text-3xl font-bold font-montserrat lowercase'>as melhores</p>
                <p className='text-white text-3xl font-bold font-montserrat uppercase tracking-[6px]'>Oportunidades <br/> de renda</p>
            </div>
        </div>
        <div className='w-full flex flex-col gap-12 max-w-[930px] py-16'>
            {
                products?.map(({id, description, dificult, isHighligh, ranking, returnNumber, returnValue, title, top, url, value}) => (
                    <div key={id}>
                        {
                            isHighligh &&                         
                            <div className='text-white text-xl font-semibold font-poppins leading-[30px] flex gap-2 mb-4'>
                                <GraphIcon />
                                Em destaque
                            </div>
                        }
                        <div className='bg-black py-11 px-16 rounded-[15px] shadow'>
                            <div className='flex justify-between max-w-[500px]'>
                                <div className='text-white font-bold text-xl font-montserrat'>{title}</div>
                                { isHighligh && <div className='w-[198px] h-8 bg-green-700 rounded-md text-white text-[15px] font-bold flex items-center justify-center'>{top}</div>}
                            </div>
                            <div className='py-6'>
                                <div className='text-white text-xs font-normal font-montserrat border-b border-white py-4'>{description}</div>
                                <div className='flex justify-between'>
                                    <div className='py-4 flex flex-col gap-1'>
                                        <p className='text-white text-xs font-normal font-montserrat'>Investimento: {value}</p>
                                        <p className='text-white text-xs font-normal font-montserrat'>Média de retorno: {returnValue}</p>
                                    </div>
                                    <div className='py-4 flex flex-col gap-1'>
                                        <div className='font-bold text-white font-montserrat text-xs'>Dificuldade: {dificult}</div>
                                        <div className='font-bold text-white font-montserrat text-xs'>Retorno: {returnNumber}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex justify-between max-w-[200px] items-center gap-2'>
                                    <p className='text-green-700 text-xs font-bold font-montserrat'>Ranking geral: </p>
                                    <div className='text-white'>{ranking}</div>
                                </div>
                                <div className='border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer'>Saiba mais</div>
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