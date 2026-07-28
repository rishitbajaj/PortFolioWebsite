import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import ParticleField from './components/ParticleField';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Scores from './sections/Scores';
import Stack from './sections/Stack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Scores />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
