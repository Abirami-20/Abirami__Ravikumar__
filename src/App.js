
import './App.css';
import About from './components/About';
import Details from './components/Details';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div className='bg-black text-white'>
      <Header />
      <Home />
      <About />
      <Details />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
