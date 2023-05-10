import 'animate.css';
import Header from './sections/Header';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GetInTouch from './sections/GetInTouch';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className='section relative grid min-h-screen items-center'>
          <Home />
        </section>
        <section className='section-inverted md:px-30  relative z-20 py-10'>
          <About />
        </section>
        <section className='section md:px-30 relative z-20 py-10'>
          <Skills />
        </section>
        <section className='section-v2 md:px-30 relative z-20 py-10'>
          <Projects />
        </section>
        <section className='section md:px-30 relative z-20 py-10 '>
          <GetInTouch />
        </section>
      </main>
      <Footer />
    </>
  );
}
//

export default App;
