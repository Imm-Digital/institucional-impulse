import React from 'react'
import Header from '../basics/Header'
import { items, depoiments } from './data'

function FirstComponent() {
  return (
    <div className="w-full py-2 flex flex-col items-center">
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl max-w-3xl font-josefin font-bold uppercase text-gray-200 text-center'>O único lugar que te mostra a verdadeira renda extra através da internet</h1>
            <h2 className='text-center text-yellow-500 text-xl font-bold font-poppins mt-5'>Todas as profissões e serviços online rankiados para você escolher.</h2>
            <img src={'https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/eeb894cd-eced-44af-2178-3bd378a0a500/public'} className='w-[244px] h-[40px] mt-5' />
        </div>
        <div className='flex flex-col items-center gap-4 py-16'>
            <p className='max-w-3xl text-gray-200 text-base text-center font-normal font-poppins'>Se você está aqui é porque já sabe que tem como ganhar dinheiro pela internet, mas não sabe como.</p>
            <p className='max-w-3xl text-gray-200 text-base text-center font-normal font-poppins'>A impulse te mostra as melhores oportunidades de renda do momento, treina para você estar apto a realizar serviços online e te guia até centenas de vagas abertas</p>
        </div>
        <div className='bg-violet flex justify-between rounded-[15px] w-full shadow-first-component-shadow max-w-[912px] py-8 px-20'>
            {
                items.map(({title, icon, id}) => (
                    <div key={id} className='flex flex-col items-center gap-2 z-10'>
                        <img src={icon} className='w-[45px] h-[51px]'/>
                        <p className='max-w-44 text-center text-white text-xs font-bold font-inter uppercase tracking-widest'>{title}</p>
                    </div>
                ))
            }
        </div>
        <div className='flex w-full max-w-[912px] py-24 gap-20'>
            {
                depoiments.map(({depoiment, name, product, id, image}) => (
                    <div key={id} className='max-w-[236px] flex flex-col items-center justify-between gap-8'>
                        <p className='text-sm font-medium text-white font-inter font-montserrat'>{depoiment}</p>
                        <div className='w-full flex flex-col items-center gap-4'>
                            <img src={image} />
                            <p className='text-sm text-white text-xs font-bold uppercase font-montserrat'>{name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FirstComponent