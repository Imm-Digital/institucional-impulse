import React from 'react'
import { CheckIcon } from '../icons/CheckIcon'
import { DenyIcon } from '../icons/DenyIcon'
import { aboutImpulse } from './data'

function WhyImpulse() {
  return (
    <div className="bg-white w-full flex flex-col items-center py-16">
      <h1 className="text-3xl font-bold text-center mb-[72px]">Para quem é a Impulse?</h1>
      <div className="flex justify-center w-full max-w-6xl px-4 gap-20">
        <div className="w-1/2 flex flex-col items-center px-4 justify-center">
          <div className="w-full flex gap-16 items-center mb-4">
            <div className='w-[55px] h-[69px]'>
                <CheckIcon />
            </div>
            <p className="text-end text-[15px] font-normal font-montserrat">
              A Impulse é para quem quer uma formação prática.<br/><br/>
              À impulse é para aqueles que, através da internet, procuram aumentar ou complementar sua renda atual e necessitam de um treinamento prático com resultados reais.<br/><br/>
              É para qualquer pessoa independente do nível de instrução, conhecimento, idade ou familiaridade com tecnologias.
            </p>
          </div>
        </div>
        <div className="w-px bg-gray-300 mx-4"></div>
        <div className="w-1/2 flex flex-col items-center px-4 justify-center">
          <div className="w-full flex gap-16 items-center mb-4">
            <p className="text-start text-[15px] font-normal font-montserrat">
              A impulse não é para quem deseja ficar milionário da noite para o dia ou para quem busca resultados financeiros sem nenhum esforço ou empenho.<br/><br/>
              Também não é para quem acredita ser necessária uma formação de anos para ter desempenho, ou para os que buscam oportunidades desonestas de adquirir renda e não possuem responsabilidade.<br/><br/>
              Ainda, não é para quem quer fazer cursos atrás de curso sem botar nada em prática e não atingir resultados financeiros concretos.
            </p>
            <div className='w-[55px] h-[69px]'>
                <DenyIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full mt-12">
        {
            aboutImpulse.map(({id, text, icon: Icon}) => (
                <div key={id} className="flex flex-col items-center m-4">
                    <Icon />
                    <p className="max-w-[160px] text-center uppercase"><strong>{text}</strong></p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default WhyImpulse