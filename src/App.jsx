import Home from './components/sections/home/Home';
import About from './components/sections/about/About';
import Skills from './components/sections/skills/Skills';
import Header from './components/Header';
import 'animate.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className='section grid min-h-screen items-center'>
          <Home />
        </section>
        <section className='section-inverted md:px-30 py-10 2xl:py-20'>
          <About />
        </section>
        <section className='section'>
          <Skills />
        </section>
      </main>
    </>
  );
}
//

export default App;
