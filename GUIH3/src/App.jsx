import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { Image } from "./components/Image/Image";
import { Card } from "./components/Card/Card";
import { GridContainer } from "./components/GridContainer/GridContainer";
import { Counter } from "./components/ClickCounter/ClickCounter";


function App() {
  const hobbies = [
    "Sundhed og velvære",
    "Guitar og musik",
    "Tjekke efter tilbud på skyr og hakket kylling",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center  bg-[#1F614E] text-[#e3e3e3]">
      <Header HeaderText="Aksels butik" />

      <GridContainer />

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full bg-white px-6 py-12">
        <Image />
        <InfoCard title="Hobbier:" items={hobbies} />
      </div>

      
      <Footer FooterText="Jeg er 20 År" />
    </div>
  );
}
export default App;
