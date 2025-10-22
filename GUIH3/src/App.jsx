import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { Image } from "./components/Image/Image";
import { Card } from "./components/Card/Card";
import { GridContainer } from "./components/GridContainer/GridContainer";
import ShaqPortrait from 'C:\\Users\\Z6APT\\GUIH3\\GUIH3\\src\\assets\\images\\Lidl432025-1_38_1702x1286_4969x3153_zoom.jpg' 


function App() {
  const hobbies = ["Sundhed og velvære", "Guitar og musik", "Tjekke efter tilbud på skyr og hakket kylling"];

  return (
    <div className="min-h-screen bg-[#1F614E] flex flex-col items-center text-white font-serif">
      <Header HeaderText="Aksels butik" />
      <GridContainer/>
      <div className="flex flex-col md:flex-row items-center bg-[#ffffff] justify-center gap-16 w-full  px-6 py-12">
        
        <Image />
        <InfoCard title="Hobbier:" items={hobbies} />
      </div>

      <Footer FooterText="Jeg er 20 År" />
    </div>
  );
}
export default App;
