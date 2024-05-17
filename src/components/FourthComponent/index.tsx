import React from 'react'
import { UpGraphIcon } from '../icons/UpGraphIcon'

function FloatingBox({ title, description, className, bgStyle, icon }: any) {
    return (
        <div className={`${className} lg:absolute py-6 lg:py-10 lg:px-[77px] bg-[#0A0020]/70 shadow to-[#412879] text-white rounded-lg lg:shadow-lg lg:w-[494px] flex flex-col items-center lg:items-start gap-4 lg:gap-2`}>
            <div className={`w-[41px] h-[43px] ${bgStyle} bg-cover bg-no-repeat`}/>
            <h3 className="text-center lg:text-start text-lg lg:text-xl font-bold font-poppins mt-2">{title}</h3>
            <p className='px-4 lg:px-0 text-center lg:text-start text-white text-base lg:text-base font-normal font-poppins'>{description}</p>
        </div>
    )
}

  
function FourthComponent() {
  return (
    <div className="w-full flex flex-col items-center relative bg-white py-24 pb-52 px-6 lg:px-0">
        <div className='w-full max-w-[943px] pt-24 px-4 lg:px-24 bg-gradient-to-tl from-[#412979] to-[#0A0020] rounded-[20px] shadow z-0'>
            <div className='flex flex-col gap-5 items-center'>
                <h2 className='text-white text-base lg:text-3xl font-bold font-josefin text-center uppercase max-w-[700px]'>Nossa metodologia já transformou a vida de milhares de membros impulse</h2>
                <p className='max-w-[550px] px-6 lg:px-0 text-center text-white text-xs lg:text-base font-normal font-poppins'>O caminho exato de como você vai ir da escolha da profissão digital até o resultado financeiro concreto.</p>
                <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/eeb894cd-eced-44af-2178-3bd378a0a500/public'} className='w-[160px] h-[29px] lg:w-[244px] lg:h-[40px]' />
            </div>
            <div className='flex flex-col items-center lg:py-16'>
                <div className='bg-mobile-metodology  lg:bg-metodology bg-cover bg-no-repeat mt-8 lg:flex lg:w-[605.81px] lg:h-[500px] lg:origin-top-left'/>
            </div>
            <div className='w-full max-w-[943px] px-8 lg:pt-24 lg:px-24 rounded-[20px] z-0 relative flex flex-col gap-4'>
                    <FloatingBox 
                        title="PROFISSÕES DIGITAIS"
                        description="As oportunidades de renda extra que mais estão dando retorno no momento. Exatamente quanto é necessário de empenho e qual é a possibilidade de ganhos."
                        className="top-[-600%] right-[70%]"
                        icon={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/923c4570-259e-4297-e05a-63188c4c2300/public'}
                        bgStyle='lg:bg-grafico bg-number-1'
                    />
                    <FloatingBox 
                        title="TREINAMENTOS"
                        description="Treinamentos curtos e extremamente práticos. Você aprende exatamente o que vai exercer e se torna apto em pouco tempo para realizar serviços através da internet."
                        className="top-[-450%] left-[70%]"
                        icon={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/744e7eda-1eff-4c79-89a4-4ebc1785a200/public'}
                        bgStyle='lg:bg-work bg-number-2'
                    />
                    <FloatingBox 
                        title="JOBSCANNER"
                        description="Nosso clube de trabalhos onde você vai conseguir ver milhares de oportunidades de serviços online em tempo real."
                        className="top-[-150%] right-[50%]"
                        icon={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2b24d001-b14f-4954-29d6-9511f59e0d00/public'}
                        bgStyle='lg:bg-jobscanner bg-number-3'
                    />
            </div>
            <div className='flex flex-col gap-4 mt-24 mb-[-80px] items-center'>
                <p className='text-center text-white text-base lg:text-3xl font-bold font-josefin uppercase'>escolha a profissão, aprenda, aplique, tenha renda extra sempre que quiser</p>
                <p className='text-center text-white text-xs lg:text-[15px] font-normal font-josefin'>Um ecossistema integrando tudo que você precisa</p>
                <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/fde2c45e-b8d2-4f94-0119-29659f0e8700/public'} className='w-[162px] h-[199px]' />
            </div>
        </div>
    </div>
  )
}

export default FourthComponent