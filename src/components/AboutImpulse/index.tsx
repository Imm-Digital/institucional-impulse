import React from 'react'
import { aboutImpulse } from './data'

function AboutImpulse() {
  return (
    <div className="bg-white flex flex-col items-center py-16 px-6 lg:px-0">
        <div className='w-full flex flex-col lg:flex-row max-w-[1061px] gap-10 lg:gap-24'>
            <div className='flex flex-col items-center lg:items-end gap-6 lg:gap-11'>
                <div className="text-center lg:text-end flex flex-row lg:flex-col gap-2 lg:gap-0">
                    <p className="text-black text-xl lg:text-[50px] font-bold font-josefin uppercase lg:leading-[60px]">O QUE É </p>
                    <p className="text-slate-950 text-xl lg:text-[50px] font-bold font-josefin uppercase lg:leading-[60px]">A IMPULSE?</p>
                </div>
                <div className="flex flex-col gap-8 text-center lg:text-end">
                    <p className="text-black text-xs lg:text-[15px] font-normal font-poppins leading-tight lg:leading-[30px]">Somos uma plataforma de treinamentos focada em ensinar sobre profissões digitais e serviços remunerados através da internet. Acreditamos que existe um mercado online capaz de beneficiar milhões de pessoas que sofrem para conseguir renda extra e não tem conhecimento sobre como se inserir nesse mercado. Na nossa jornada já impactamos a vida de 170 mil Membros Impulse espalhados em mais de 140 países diferentes. </p>
                    <p className="text-black text-xs lg:text-[15px] font-bold font-poppins leading-tight lg:leading-[30px]">Nosso propósito é levar liberdade, autonomia e resultados financeiros concretos para a vida das pessoas.</p>
                </div>
            </div>
            <div className='flex flex-col gap-8 items-center justify-center'>
                {
                    aboutImpulse.map(({id, icon: Icon, text}) => (
                        <div className="flex flex-col items-center gap-3 w-[174px]" key={id}>
                            <Icon />
                            <p className="text-center text-black text-xs font-bold font-montserrat uppercase tracking-widest">{text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AboutImpulse