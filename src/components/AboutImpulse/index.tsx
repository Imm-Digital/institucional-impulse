import React from 'react'
import { aboutImpulse } from './data'

function AboutImpulse() {
  return (
    <div className="bg-white flex flex-col items-center py-8">
        <div className='w-full flex max-w-[1061px] gap-24'>
            <div className='flex flex-col items-end gap-11'>
                <div className="text-end">
                    <p className="text-black text-[50px] font-bold font-josefin uppercase leading-[60px]">O QUE É </p>
                    <p className="text-slate-950 text-[50px] font-bold font-josefin uppercase leading-[60px]">A IMPULSE</p>
                </div>
                <div className="flex flex-col gap-8 text-end">
                    <p className="text-black text-[15px] font-normal font-poppins leading-[30px]">Somos uma plataforma de treinamentos focada em ensinar sobre profissões ditais e serviços remunerados através da internet. Acreditamos que existe um mercado online capaz de beneficiar milhões de pessoas comuns que sofrem para consguir mais dinheiro e não tem conhecimento sobre como se inserir nesse mercado. Na nossa jornada já impactamos a vida de 170 mil Membros Impulse espalhados em mais de 140 países diferentes. </p>
                    <p className="text-black text-[15px] font-bold font-poppins leading-[30px]">Nosso propósito é levar liberdade, autonomia e resultados financeiros concretos para a vida das pessoas.</p>
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