import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { Image } from "./components/Image/Image";

function App() {
  return (
    <div className="Container-Container">
      <Header />
      <div className="Center-Content">
        <Image />
        <InfoCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
