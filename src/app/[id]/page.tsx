'use client'
import Footer from "@/components/basics/Footer";
import { UpGraphIcon } from "@/components/icons/UpGraphIcon";
import { GraphIcon } from "@/components/icons/graphIcon";
import { useEffect, useState } from "react";
import productsData from "@/utils/products.json"; 

export default function Page({
    params,
  }: {
    params: { id: string };
  }) {
    const slug = params.id
    const [product, setProduct] = useState<any>(null);
    console.log(product)

    useEffect(() => {
        if (slug) {
            const foundProduct = productsData.products.find(p => p.slug === slug);
            setProduct(foundProduct);
        }
    }, [slug]);

    if (!product) {
        return <p>Carregando produto...</p>;
    } else {
        return (
            <div>
                <div className='lg:w-full lg:h-[374px] bg-oportunites shadow-inner bg-no-repeat bg-cover flex flex-col items-center justify-center py-6 px-6 lg:py-0 lg:px-'>
                    <div className='w-full max-w-[930px] flex flex-col gap-4'>
                        <p className='text-white text-base lg:text-3xl font-bold font-montserrat lowercase leading-[50px]'>as melhores</p>
                        <p className='text-white text-2xl lg:text-3xl font-bold font-montserrat uppercase tracking-[6px]'>Oportunidades <br/> de renda</p>
                    </div>
                </div>
               <div className="w-full h-full bg-[#1a1a1a] flex flex-col items-center pb-10 px-6 lg:px-0">
                    <div className="w-full max-w-[930px] lg:pt-28 pt-16">
                                    <div className='text-white text-xl items-center font-semibold font-poppins leading-[30px] flex gap-2 mb-4'>
                                        <GraphIcon />
                                        Em destaque
                                    </div>
                        <div className="bg-black py-6 px-8 lg:px-16 rounded-[15px] shadow">
                            <div className="py-9 flex flex-col gap-8 border-b">
                                <h1 className="text-white text-xl font-bold font-">{product.title}</h1>
                                <h2 className="text-white text-[15px] font-normal font-montserrat">
                                    <strong className="text-white text-[15px] font-bold font-montserrat">
                                        O que você podera fazer:
                                    </strong>
                                    {' '}{product.about}
                                </h2>
                            </div>
                            <div className="flex flex-col py-20">
                                <p className="text-softviolet text-xl font-semibold font-montserrat uppercase">Nos ultimos 6 meses</p>
                                <div className="flex flex-col lg:flex-row justify-between gap-8">
                                    <div className="flex flex-col gap-2">
                                        {
                                            product?.lastMonths.map(({id, title, value}: any) => (
                                                <div key={id}>
                                                    <div>icone</div>
                                                    <div className="flex gap-1">
                                                        <p className="text-white lg:text-xl text-xs font-semibold">{title} <small className="text-white lg:text-xl text-xs font-normal">{value}</small></p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <div className="w-full lg:w-[202px] bg-gradient-to-b from-dark-blue to-vivid-purple rounded-md py-9 px-6 flex flex-col gap-4">
                                            <p className="text-white text-xl font-semibold font-montserrat uppercase">Risco <br /> baixo</p>
                                            <p className="text-white text-[15px] font-normal font-montserrat">Retorno financeiro acima do investido após o primeiro trabalho realizado.</p>
                                        </div>
                                        <div className="bg-sucess rounded-md px-4 py-2 text-center text-white text-[15px] font-bold font-montserrat cursor-pointer">Me tornar um <br /> {product.title}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pb-20">
                                    <img src="https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/0200eb48-0020-4089-41e0-58dd7ceef500/public"/>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-white text-[15px] font-bold font-josefin uppercase leading-[30px]">escolha a profissão, aprenda, aplique, tenha renda extra sempre que quiser</p>
                                    <p className="text-[#B59FE1] text-[15px] font-bold font-montserrat">As três etapas para você começar a ter retornos financeiros:</p>
                                </div>
                                <div className="py-12 flex flex-col gap-6">
                                {
                                        product?.steps.map(({id, title, text}: any) => (
                                            <div key={id} className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex items-center">
                                                    <UpGraphIcon />
                                                </div>
                                                <div>
                                                    <p className="text-white text-xl font-bold font-poppins uppercase tracking-widest">{id}. {title}</p>
                                                    <p className="text-white text-[15px] font-normal font-poppins">{text}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className="bg-gradient-to-b from-[#412879] to-[#784ADF] py-8 px-8 lg:px-16 rounded-lg flex flex-col gap-4">
                                <p className="text-white text-xs font-normal font-montserrat">{product.feedback.text}</p>
                                <p className="text-white text-[10px] font-normal font-montserrat uppercase"><strong className="text-white text-[10px] font-bold font-montserrat lowercase">{product.feedback.name}</strong> - membro impulse</p>
                            </div>
                            <div className="flex items-center justify-center py-8">
                                <div className="bg-sucess shadow text-center text-white text-[15px] lg:text-[25px] font-bold font-montserrat py-4 px-6 rounded-lg cursor-pointer">Me tornar um {product.title}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center max-w-[1200px] py-14">
                        <div className="flex flex-col-reverse lg:flex-col items-center justify-center md:justify-start text-center md:text-left">
                            <p className="text-white text-lg md:text-xl lg:text-2xl font-bold font-josefin uppercase mt-4 md:mt-0 md:ml-4">
                                Nossa plataforma de treinamentos
                            </p>
                            <img src='https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2721061e-baf0-4140-265a-7719759fb100/public' className="max-w-full h-auto" />
                        </div>
                        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-9">
                            <p className="text-center lg:text-right text-white text-[15px] lg:text-2xl font-bold font-josefin uppercase lg:leading-10">Milhares Possibilidades de trabalhos encontradas no nosso Jobscanner</p>
                            <img  src='https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2acc17a2-4d8f-49de-6739-ab809993ad00/public' className="lg:w-[761px] lg:h-[692px] max-w-full h-auto"/>    
                        </div>
                        <div className="bg-sucess mt-12 lg:mt-0 shadow text-center text-white text-[15px] lg:text-[25px] font-bold font-montserrat py-4 px-6 rounded-lg cursor-pointer">Me tornar um {product.title}</div>
                    </div>
                </div> 
                <Footer />
            </div>
            )
    }
}