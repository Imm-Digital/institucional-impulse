import FirstComponent from "@/components/FirstComponent";
import Header from "@/components/basics/Header";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-tl from-primary to-black shadow min-h-screen">
        <Header />
        <FirstComponent />
      </div>
    </div>
  );
}
