import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from "./sections/About"

function App() {
  return (
    <main className="relative bg-background text-text w-full font-sans text-xl">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}

export default App;
