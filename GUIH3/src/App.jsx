import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { Image } from "./components/Image/Image";

function App() {
  return (
    <body>
<div class="Container-Container">
      <div class="GUIContainer">
        <Header />
        <Footer />
        <Image/>

        <InfoCard/>
      </div>
    </div>
    </body>
    
  );
}

export default App;
