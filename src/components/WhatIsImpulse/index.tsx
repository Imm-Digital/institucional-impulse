import React from 'react'

function WhatIsImpulse() {
    return (
        <div className='bg-white pt-32 flex flex-col items-center px-9'>
            <div className='flex flex-col lg:items-center max-w-[1020px] gap-12'>
                <h2 className='text-black text-3xl lg:text-[50px] font-bold font-josefin uppercase leading-[60px]'>O que é a Impulse</h2>
                <p className='text-black text-[15px] font-poppins leading-[30px] lg:text-center'>Somos uma plataforma de treinamentos focada em ensinar sobre profissões digitais e serviços remunerados através da internet. Acreditamos que existe um mercado online capaz de beneficiar milhões de pessoas que sofrem para conseguir renda extra e não tem conhecimento sobre como se inserir nesse mercado. Na nossa jornada já impactamos a vida de 170 mil Membros Impulse espalhados em mais de 140 países diferentes. </p>
                <p className='text-black text-[15px] font-bold font-poppins leading-[30px] lg:text-center'>Nosso propósito é levar liberdade, autonomia e resultados financeiros concretos para a vida das pessoas.</p>
            </div>
            <div className="flex flex-col items-center gap-8 max-w-[1200px] py-20">
                <div className="flex flex-col-reverse lg:flex-col items-center justify-center md:justify-start text-center md:text-left lg:pt-8 relative">
                    <p className="max-w-[293px] text-black text-sm md:text-xl lg:text-2xl font-bold font-josefin uppercase mt-4 md:mt-0 md:ml-4 lg:absolute lg:top-48 lg:right-8">
                        Plataforma de treinamentos
                    </p>
                    <img src='https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/bd9ae5b4-01c6-4fd8-19f3-db615cefa600/public' className="max-w-full h-auto lg:min-w-[1200px]" />
                </div>
                <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-9">
                    <p className="text-center lg:text-right text-black text-sm lg:text-2xl font-bold font-josefin uppercase lg:leading-10">Milhares Possibilidades de trabalhos encontradas no nosso Jobscanner</p>
                    <img src='https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2acc17a2-4d8f-49de-6739-ab809993ad00/public' className="lg:w-[761px] lg:h-[692px] max-w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default WhatIsImpulse