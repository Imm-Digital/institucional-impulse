import React from 'react'
import { UpGraphIcon } from '../icons/UpGraphIcon'

function FloatingBox({ title, description, className, icon: Icon }: any) {
    return (
      <div className={`${className} absolute px-20 py-10 bg-gradient-to-tl from-primary to-slate-950 text-white rounded-lg shadow-lg w-[494px] max-h-[252px]`}>
        <Icon />
        <h3 className="text-[25px] font-bold font-poppins mt-2">{title}</h3>
        <p className='text-white text-[15px] font-normal font-poppins'>{description}</p>
      </div>
    )
}

  
function FourthComponent() {
  return (
    <div className="w-full flex flex-col items-center relative bg-white py-24 pb-52">
        <div className='w-full max-w-[943px] pt-24 px-24 bg-gradient-to-tl from-primary to-slate-950 rounded-[20px] shadow z-0'>
            <div className='w-full max-w-[943px] pt-24 px-24 rounded-[20px]  z-0 relative'>
                    <FloatingBox 
                        title="PROFISSÕES DIGITAIS"
                        description="As oportunidades de renda extra que mais estão dando retorno no momento. Exatamente quanto é necessário de empenho e qual é a possibilidade de ganhos."
                        className="top-[400%] right-[70%]"
                        icon={UpGraphIcon}
                    />
                    <FloatingBox 
                        title="TREINAMENTOS"
                        description="Treinamentos curtos e extremamente práticos. Você aprende exatamente o que vai exercer e se torna apto em pouco tempo para realizar serviços através da internet."
                        className="top-[450%] left-[70%]"
                        icon={UpGraphIcon}
                    />
                    <FloatingBox 
                        title="JOBSCANNER"
                        description="Nosso clube de trabalhos onde você vai conseguir ver milhares de oportunidades de serviços online em tempo real."
                        className="top-[750%] right-[50%]"
                        icon={UpGraphIcon}
                    />
            </div>
            <div className='flex flex-col gap-5 items-center'>
                <h2 className='text-white text-3xl font-bold font-josefin text-center uppercase max-w-[700px]'>Nossa metodologia já transformou a vida de milhares de membros impulse</h2>
                <p className='max-w-[550px] text-center text-white text-base font-normal font-poppins'>O caminho exato de como você vai ir da escolha da profissão digital até o resultado financeiro concreto.</p>
                <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/eeb894cd-eced-44af-2178-3bd378a0a500/public'} className='w-[244px] h-[40px]' />
            </div>
            <div className='flex flex-col items-center py-16'>
                <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/bbbdbd57-18d5-4934-06a4-da4648642e00/public'} className='w-[605.81px] h-[496.54px] origin-top-left'/>

            </div>
            <div className='flex flex-col gap-4 mt-24 mb-[-80px] items-center'>
                <p className='text-center text-white text-3xl font-bold font-josefin uppercase'>escolha a profissão, aprenda, aplique, tenha renda extra sempre que quiser</p>
                <p className='text-center text-white text-[15px] font-normal font-josefin'>Um ecossistema integrando tudo que você precisa</p>
                <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/fde2c45e-b8d2-4f94-0119-29659f0e8700/public'} className='w-[162px] h-[199px]' />
            </div>
        </div>
    </div>
  )
}

export default FourthComponent