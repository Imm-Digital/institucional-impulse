import FirstComponent from "@/components/FirstComponent";
import SecondComponent from "@/components/SecondComponent";
import ThirdComponent from "@/components/ThirdComponent";
import Header from "@/components/basics/Header";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-tl from-primary to-black shadow min-h-screen">
        <Header />
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    </div>
  );
}
