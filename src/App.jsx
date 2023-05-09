import 'animate.css';

import Header from './components/Header';
import Home from './components/sections/home/Home';
import About from './components/sections/about/About';
import Skills from './components/sections/skills/Skills';
import Projects from './components/sections/projects/Projects';
import GetInTouch from './components/sections/get-in-touch/GetInTouch';
import Footer from './components/Footer';

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
        <section className='section-inverted md:px-30 relative z-20 py-10'>
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
