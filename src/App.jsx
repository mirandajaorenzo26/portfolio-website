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
        <section className='section grid min-h-screen items-center px-2 lg:px-20 xl:px-52 '>
          <Home />
        </section>
        <section className='section-inverted lg:px-20 xl:px-52'>
          <About />
        </section>
        <Skills />
      </main>
    </>
  );
}
//

export default App;
