import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { Image } from "./components/Image/Image";

function App() {
  const hobbies = ["Sundhed og velvære", "Guitar", "Læse"];

  return (
    <div className="Container-Container">
      <Header HeaderText={"Aksel"}/>
      <div className="Center-Content">
        <Image />
        <InfoCard title="Hobbier:" items={hobbies} />
      </div>
      <Footer FooterText={"20 År"}/>
    </div>
  );
}

export default App;
