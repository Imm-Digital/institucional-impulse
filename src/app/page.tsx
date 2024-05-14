'use client'

import FourthComponent from "@/components/FourthComponent";
import HomeComponent from "@/components/HomeComponent";
import WhyImpulse from "@/components/WhyImpulse";
import Header from "@/components/basics/Header";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-tl from-primary to-black shadow min-h-screen">
      <Header isHomePage/>
      <HomeComponent />
      <FourthComponent />
      <WhyImpulse />
    </div>
  );
}
