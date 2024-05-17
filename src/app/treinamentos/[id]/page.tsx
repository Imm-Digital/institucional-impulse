'use client'
import Footer from "@/components/basics/Footer";
import { UpGraphIcon } from "@/components/icons/UpGraphIcon";
import { GraphIcon } from "@/components/icons/graphIcon";
import { useEffect, useRef, useState } from "react";
import productsData from "@/utils/products.json";
import { useRouter } from "next/navigation"
import { ShareIcon } from "@/components/icons/ShareIcon";
import { VerifiedUser } from "@/components/icons/VerifiedUser";
import { MoneySquare } from "@/components/icons/MoneySquare";
import { TimeIcon } from "@/components/icons/TimerIcon";
import { HourGlass } from "@/components/icons/HourGlass";
import { ArrowDownCircled } from "@/components/icons/ArrowDownCircled";

export default function Page({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter()
    const slug = params.id
    const [product, setProduct] = useState<any>(null);
    const myTargetRef = useRef<HTMLDivElement>(null);

    const handleIcon = (id: any) => {
        const iconsData: any = {
            1: ShareIcon,
            2: VerifiedUser,
            3: MoneySquare,
            4: TimeIcon,
            5: HourGlass
        };

        const Icon = iconsData[id];
        return <Icon />;
    };

    const handleScroll = () => {
        if (myTargetRef.current) {
            myTargetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        if (slug) {
            const foundProduct = productsData.products.find(p => p.slug === slug);
            setProduct(foundProduct);
        }
    }, [slug]);

    const handleRedirect = (value: string) => {
        router.push(value)
    }

    if (!product) {
        return <p>Carregando produto...</p>;
    } else {
        return (
            <div className="bg-gradient-to-tl from-[#412979] to-[#0A0020] shadow ">
                <div className='lg:w-full lg:h-[374px] bg-oportunites shadow-inner bg-no-repeat bg-cover flex flex-col items-center justify-end pt-6 px-6 gap-16 lg:py-0 lg:px-0'>
                    <div className='w-full max-w-[930px] flex flex-col gap-4'>
                        <p className='text-white text-base lg:text-3xl font-bold font-montserrat lowercase leading-[50px]'>as melhores</p>
                        <p className='text-white text-2xl lg:text-3xl font-bold font-montserrat uppercase tracking-[6px]'>Oportunidades <br /> de renda</p>
                    </div>
                    <div onClick={() => handleScroll()} className="w-full mb-[-25px] flex items-start max-w-[1000px] cursor-pointer"><ArrowDownCircled /></div>
                </div>
                <div className="w-full h-full bg-training bg-no-repeat bg-cover flex flex-col items-center pb-0 px-6 lg:px-0">
                    <div className="w-full max-w-[930px] lg:pt-28 pt-16">
                        <div className='text-white text-xl items-center font-semibold font-poppins leading-[30px] flex gap-2 mb-4'>
                            <GraphIcon />
                            Em destaque
                        </div>
                        <div ref={myTargetRef} className="bg-black py-6 px-8 lg:px-16 rounded-t-[15px] shadow">
                            <div className="py-9 flex flex-col gap-8 border-b">
                                <h1 className="text-white text-xl font-bold font-">{product.title}</h1>
                                <h2 className="text-white text-[15px] font-normal font-montserrat">
                                    <strong className="text-white text-[15px] font-bold font-montserrat">
                                        O que você podera fazer:
                                    </strong>
                                    {' '}{product.about}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full flex flex-col items-center">
                        <div className="bg-custom-gradient absolute h-full w-full top-0 left-0 right-0" />
                        <div className="max-w-[930px] bg-black px-16 z-20 pb-28">
                            <div className="flex flex-col py-20 z-20 bg-black">
                                <p className="text-softviolet text-xl font-semibold font-montserrat uppercase">Nos ultimos 6 meses</p>
                                <div className="flex flex-col lg:flex-row justify-between gap-8">
                                    <div className="flex flex-col gap-8 pt-4">
                                        {
                                            product?.lastMonths.map(({ id, title, value, icon: Icon }: any) => (
                                                <div key={id} className="flex gap-4 items-center">
                                                    <div>
                                                        {handleIcon(id)}
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <p className="text-white lg:text-lg text-xs font-semibold">{title} <small className="text-white lg:text-lg text-xs font-normal">{value}</small></p>
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
                                        <div onClick={() => handleRedirect(product.url)} className="bg-sucess rounded-md px-4 py-2 text-center text-white text-[15px] font-bold font-montserrat cursor-pointer">Me tornar um <br /> {product.title}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="z-20 bg-black">
                                <div className="pb-20">
                                    <img src="https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/0200eb48-0020-4089-41e0-58dd7ceef500/public" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-white text-[15px] font-bold font-josefin uppercase leading-[30px]">escolha a profissão, aprenda, aplique e tenha renda extra sempre que quiser!</p>
                                    <p className="text-[#B59FE1] text-[15px] font-bold font-montserrat">As três etapas para você começar a ter retornos financeiros:</p>
                                </div>
                                <div className="py-12 flex flex-col gap-10">
                                    {
                                        product?.steps.map(({ id, title, text, icon }: any) => (
                                            <div key={id} className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex items-center">
                                                    <img src={icon} className="w-[43px] h-[40px]" />
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-white text-xl font-bold font-poppins uppercase tracking-widest">{id}. {title}</p>
                                                    <p className="text-white text-[15px] font-normal font-poppins">{text}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className="bg-gradient-to-b from-[#412879] to-[#784ADF] shadow py-8 px-8 lg:px-16 rounded-lg flex flex-col gap-4 z-20">
                                <p className="text-white text-xs font-normal font-montserrat">{product.feedback.text}</p>
                                <p className="text-white text-[10px] font-normal font-montserrat uppercase"><strong className="text-white text-[10px] font-bold font-montserrat uppercase">{product.feedback.name}</strong> - membro impulse</p>
                                <img src={product.feedback.image} className="w-[40px] h-[40px]" />
                            </div>
                            <div className="flex items-center justify-center py-8 z-20">
                                <div onClick={() => handleRedirect(product.url)} className="bg-sucess shadow-custom-green text-center text-white text-[15px] lg:text-[25px] font-bold font-montserrat py-6 px-12 rounded-lg cursor-pointer">Me tornar um {product.title}</div>
                            </div>
                            <div className=" flex flex-col items-center bg-black max-w-[930px] py-20 z-20">
                                <div className="flex flex-col-reverse lg:flex-col items-center justify-center md:justify-start text-center md:text-left lg:pt-8 z-20">
                                    <p className="text-white text-lg md:text-xl lg:text-2xl font-bold font-josefin uppercase mt-4 md:mt-0 md:ml-4">
                                        Nossa plataforma de treinamentos
                                    </p>
                                    <img src='https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2721061e-baf0-4140-265a-7719759fb100/public' className="max-w-full h-auto lg:min-w-[1200px]" />
                                </div>
                                <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-9 z-20">
                                    <p className="text-center lg:text-right text-white text-[15px] lg:text-2xl font-bold font-josefin uppercase lg:leading-10">Milhares Possibilidades de trabalhos encontradas no nosso Jobscanner</p>
                                    <img src='https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2acc17a2-4d8f-49de-6739-ab809993ad00/public' className="lg:w-[761px] lg:h-[692px] max-w-full h-auto" />
                                </div>
                                <div onClick={() => handleRedirect(product.url)} className="bg-sucess mt-12 lg:mt-0 shadow-custom-green text-center z-20 text-white text-[15px] lg:text-[25px] font-bold font-montserrat py-6 px-12 rounded-lg cursor-pointer">Me tornar um {product.title}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}