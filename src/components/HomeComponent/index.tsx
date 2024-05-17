import React from 'react'
import { homeDepoiments, theWay } from './data'
import { CheckIcon } from '../icons/CheckIcon'

function HomeComponent() {
    return (
        <div className='w-full flex flex-col gap-32 items-center overflow-hidden pb-36'>
            <div className='w-full flex flex-col lg:flex-row justify-between pt-16 lg:pt-32 px-9 lg:px-0 lg:pl-[10%] 2xl:pl-[20%]'>
                <div className='w-full flex flex-col gap-12 lg:max-w-[600px]'>
                    <h1 className='text-gray-200 text-[15px] lg:text-3xl font-bold font-josefin uppercase lg:leading-10'>
                        As melhores oportunidades de renda online. A liberdade, autonomia e ganhos que você precisa com profissões digitais
                    </h1>
                    <h2 className='text-yellow-500 text-xs lg:text-[15px] font-semibold font-poppins lg:max-w-[476px]'>
                        Plataforma de treinamentos e um ecossistema integrando as suas necessidades: escolha a profissão ideal para você, aprenda, aplique, tenha renda extra sempre que quiser
                    </h2>
                    <div className="w-full lg:w-[395px] h-[51px] px-6 lg:pl-[42px] pr-10 py-3.5 bg-green-800/opacity-0 rounded-[10px] border border-white justify-center items-center inline-flex cursor-pointer">
                        <div className="text-center text-white text-[15px] font-normal font-poppins">Escolher a melhor oportunidade de renda</div>
                    </div>
                </div>
                <div className='w-full mt-9 lg:h-[460px] relative overflow-hidden'>
                    <div className='lg:absolute left-0 lg:w-[771px] lg:h-[671px]'>
                        <img src='https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2721061e-baf0-4140-265a-7719759fb100/public' className='w-[771px] h-auto' />
                    </div>
                </div>
            </div>
            <div className='overflow-scroll lg:overflow-auto w-full flex gap-9 lg:gap-20 px-9 lg:px-0 lg:pl-[10%] 2xl:pl-[20%]'>
                {
                    homeDepoiments.map(({ id, name, depoiment }) => (
                        <div key={id} className='flex flex-col justify-end px-5 w-full lg:w-[287px] h-[410px] bg-white py-9'>
                            <div className='w-full min-w-[250px] min-h-[160px] bg-[#0A0020CC] p-6 rounded-xl flex flex-col justify-between'>
                                <p className='text-gray-200 text-xs font-normal font-poppins'>{`"${depoiment}"`}</p>
                                <p className='text-gray-200 text-xs font-semibold font-poppins'>{name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex px-9 lg:px-0 flex-col w-full max-w-[591px] gap-8'>
                <p className='text-white font-bold font-montserrat text-[15px] lg:text-2xl text-center max-w-[591px] pl-4'>
                    O caminho para a verdadeira renda extra, você decide quando ganhar e quanto ganhar.
                </p>
                <div className='flex flex-col gap-4'>
                    {
                        theWay.map(({ id, text }) => (
                            <div key={id} className='flex gap-4'>
                                <div><CheckIcon width='24' height='30' /></div>
                                <p className='text-white font-normal font-montserrat text-xs lg:text-[15px] text-center'>{text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeComponent