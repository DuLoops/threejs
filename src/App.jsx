import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-contain bg-no-repeat bg-center bg-black">
          <Navbar />
          <Hero />
        </div>
        {/* <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
