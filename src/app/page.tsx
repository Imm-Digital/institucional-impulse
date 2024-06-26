'use client'

import AskedQuestions from "@/components/AskedQuestions";
import FeedbackComponent from "@/components/FeedbackComponent";
import FourthComponent from "@/components/FourthComponent";
import HomeComponent from "@/components/HomeComponent";
import JobsComponent from "@/components/JobsComponent";
import OpportunitiesComponent from "@/components/OpportunitiesComponent";
import WhatIsImpulse from "@/components/WhatIsImpulse";
import WhyImpulse from "@/components/WhyImpulse";
import Footer from "@/components/basics/Footer";
import Header from "@/components/basics/Header";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const offsetTop = ref.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className="w-full bg-gradient-to-tl from-[#412979] to-[#0A0020] shadow min-h-screen">
      <Header isHomePage {...{handleScroll}}/> 
      <HomeComponent />
      <FourthComponent />
      <WhyImpulse />
      <div ref={ref}>
        <OpportunitiesComponent />
      </div>
      <FeedbackComponent />
      <WhatIsImpulse />
      <JobsComponent />
      <AskedQuestions />
      <Footer /> 
    </div>
  );
}
