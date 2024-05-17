import React from 'react'
import Accordion from '../Accordion'
import { questions } from './data'

function AskedQuestions() {
  return (
    <div className='bg-white p-6 lg:py-24 flex flex-col items-center gap-9 lg:gap-28'>
        <h2 className='text-center text-black text-base lg:text-3xl font-bold font-josefin uppercase leading-10'>PERGUNTAS FREQUENTES</h2>
        <div className='lg:w-[800px] flex flex-col gap-6'>
          {
            questions?.map(({id, title, text}) => <Accordion key={id} title={title} content={text} />)
          }
        </div>
    </div>
  )
}

export default AskedQuestions