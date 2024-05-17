import React from 'react'
import { CheckIcon } from '../icons/CheckIcon'
import { DenyIcon } from '../icons/DenyIcon'
import { aboutImpulse } from './data'

function WhyImpulse() {
  return (
    <div className="bg-white w-full flex flex-col items-center px-9 pb-16 lg:py-16 lg:pb-72">
      <h1 className="text-3xl font-bold text-start mb-[72px]">Para quem é a Impulse?</h1>
      <div className="flex flex-col lg:flex-row justify-center w-full max-w-6xl lg:px-4 gap-9 lg:gap-20">
        <div className="lg:w-1/2 flex flex-col items-center lg:px-4 justify-center">
          <div className="w-full flex flex-col lg:flex-row gap-16 lg:items-center mb-4">
            <div className='w-[55px] h-[69px]'>
                <CheckIcon />
            </div>
            <p className="lg:text-end text-[15px] font-normal font-montserrat">
              É para aqueles que, através da internet, procuram aumentar ou complementar sua renda atual e necessitam de um treinamento prático mostrando exatamente como é possível realizar serviços online e ser pago para isso.
              É para qualquer pessoa independente do nível de instrução, conhecimento, idade ou familiaridade com tecnologias.<br/><br/>
              É para quem busca liberdade, autonomia e resultados financeiros concretos para a sua vida.
            </p>
          </div>
        </div>
        <div className="w-px bg-gray-300 mx-4"></div>
        <div className="lg:w-1/2 flex flex-col items-center lg:px-4 justify-center">
          <div className="w-full flex flex-col-reverse lg:flex-row gap-16 lg:items-center mb-4">
            <p className="text-start text-[15px] font-normal font-montserrat">
              A Impulse não é para quem busca resultados financeiros sem esforço ou empenho.<br/><br/>
              Também não é para quem acredita ser necessária uma formação de anos para ter desempenho, ou para os que buscam oportunidades desonestas de adquirir renda e não possuem responsabilidade.<br/><br/>
              Ainda, não é para quem quer fazer cursos sem colocar nada em prática esperando atingir resultados financeiros concretos.
            </p>
            <div className='w-[55px] h-[69px]'>
                <DenyIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-[72px] w-full mt-24">
        {
            aboutImpulse.map(({id, text, icon: Icon}) => (
                <div key={id} className="flex flex-col justify-between items-center gap-8 m-4">
                    <Icon />
                    <p className="min-h-[48px] max-w-[160px] text-center uppercase flex items-center"><strong>{text}</strong></p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default WhyImpulse