import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from "./sections/About"
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <main className="relative bg-background text-text w-full font-sans text-[1.2rem] md:text-[1.4rem] xl:text-[1.45rem]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;
