import AboutImpulse from "@/components/AboutImpulse";
import AskedQuestions from "@/components/AskedQuestions";
import FifthComponent from "@/components/FifthComponent";
import FirstComponent from "@/components/FirstComponent";
import Footer from "@/components/basics/Footer";
import FourthComponent from "@/components/FourthComponent";
import JobsComponent from "@/components/JobsComponent";
import SecondComponent from "@/components/SecondComponent";
import ThirdComponent from "@/components/ThirdComponent";
import Header from "@/components/basics/Header";

export default function Training() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-tl from-primary to-black shadow min-h-screen">
        <Header />
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        {/* <FifthComponent /> */}
        <AboutImpulse />
        <JobsComponent />
        {/* <AskedQuestions />  */}
        <Footer />
      </div>
    </div>
  );
}
