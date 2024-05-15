'use client'
import AboutImpulse from "@/components/AboutImpulse";
import AskedQuestions from "@/components/AskedQuestions";
import FifthComponent from "@/components/FifthComponent";
import FirstComponent from "@/components/FirstComponent";
import Footer from "@/components/basics/Footer";
import FourthComponent from "@/components/FourthComponent";
import JobsComponent from "@/components/JobsComponent";
import SecondComponent from "@/components/SecondComponent";
import OpportunitiesComponent from "@/components/OpportunitiesComponent";
import Header from "@/components/basics/Header";
import { useRef } from "react";

export default function Training() {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
      if (ref.current) {
          ref.current.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
          });
      }
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-tl from-primary to-black shadow min-h-screen">
        <Header {...{handleScroll}}/>
        <FirstComponent />
        <SecondComponent />
        <div ref={ref}>
          <OpportunitiesComponent />
        </div>
        <FourthComponent />
        {/* <FifthComponent /> */}
        <AboutImpulse />
        <JobsComponent />
        <AskedQuestions />  
        <Footer />
      </div>
    </div>
  );
}
