'use client'
import React, { useState } from 'react'
import { GraphIcon } from '../icons/graphIcon'
import { products } from './data'
import { useRouter } from 'next/navigation'

type OpportunitiesType = {
    isTrainingPage?: boolean;
}

function OpportunitiesComponent({ isTrainingPage }: OpportunitiesType) {
    const router = useRouter()
    const [visibleProducts, setVisibleProducts] = useState(3);
    const [loading, setLoading] = useState(false);
    const maxStars = 5;

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleProducts(prev => prev + 3);
            setLoading(false);
        }, 1000); 
    };

    const getDificult: any = {
        1: '0%',
        2: '20%',
        3: '40%',
        4: '60%',
        5: '80%',
    };

    return (
        <div className='bg-[#181818] flex flex-col lg:items-center min-h-screen px-0 py-0'>
            <div className='lg:w-[1100px] lg:h-[358px] py-6 px-6 lg:py-0 lg:px-0 shadow-inner-custom bg-oportunites bg-cover lg:mt-[-140px] bg-no-repeat lg:rounded-[20px]'>
                <div className='w-full lg:px-[162px] lg:pt-[104px] flex flex-col gap-4'>
                    <p className='text-white text-base lg:text-3xl font-bold font-montserrat lowercase'>as melhores</p>
                    <p className='text-white text-2xl lg:text-3xl font-bold font-montserrat uppercase tracking-[6px]'>Oportunidades <br /> de renda</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-12 max-w-[930px] py-8 lg:py-16 px-6'>
                {
                    products.slice(0, visibleProducts).map(({ id, description, dificult, isHighligh, ranking, returnNumber, returnValue, title, top, url, value }) => (
                        <div key={id}>
                            {
                                isHighligh &&
                                <div className='text-white text-xl items-center font-semibold font-poppins leading-[30px] flex gap-2 mb-4'>
                                    <GraphIcon />
                                    Em destaque
                                </div>
                            }
                            <div className='bg-black/50 p-6 lg:py-11 lg:px-16 rounded-[15px] shadow-custom-drop'>
                                <div className='w-full flex flex-col lg:flex-row gap-8'>
                                    <h3 className='text-white font-bold text-xl font-montserrat'>{title}</h3>
                                    {isHighligh && <div className='w-[198px] h-8 bg-green-700 rounded-md text-white text-[15px] font-bold flex items-center justify-center'>{top}</div>}
                                </div>
                                <div className='py-4 lg:py-6'>
                                    <div className='text-white text-xs font-normal font-montserrat border-b border-white py-4'>{description}</div>
                                    <div className='flex flex-col lg:flex-row justify-between py-6 lg:py-0 gap-4 lg:gap-0'>
                                        <div className='lg:py-4 flex flex-col lg:gap-1'>
                                            <p className='text-white text-xs font-normal font-montserrat'>Investimento: {value}</p>
                                            <p className='text-white text-xs font-normal font-montserrat'>Média de retorno: {returnValue}</p>
                                        </div>
                                        <div className='lg:py-4 flex flex-col items-start lg:items-end z-0'>
                                            <div className='flex gap-2 items-center font-bold text-white font-montserrat text-xs z-10'>
                                                Dificuldade:
                                                <div className="relative w-20 h-4">
                                                    <div style={{ left: getDificult[dificult] }} className="absolute inset-0 mt-[-32px] flex items-center text-white font-bold text-xs z-20">
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
                                                    <span key={i} className={`text-lg ${i < ranking ? 'text-white' : 'text-gray-500'}`}>★</span>
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
                {
                    isTrainingPage ? (
                        <div className='flex flex-col items-center'>
                            <button
                                className='w-full lg:w-[320px] border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer text-center'
                                onClick={loadMore}
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Carregando...
                                    </div>
                                ) : (
                                    "Carregar mais..."
                                )}
                            </button>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center'>
                            <div onClick={() => router.push(`/treinamentos`)} className='w-full lg:w-[320px] border py-2 px-12 border-white text-white font-bold font-montserrat cursor-pointer text-center'>Mais treinamentos</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default OpportunitiesComponent
