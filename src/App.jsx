import Home from './components/sections/home/Home';
import About from './components/sections/about/About';
import Skills from './components/sections/skills/Skills';
import Header from './components/Header';
import 'animate.css';

function App() {
  return (
    <>
      <Header />
      <main className=' dark:bg-navy-blue'>
        <section className='grid min-h-screen items-center px-2 lg:px-20 xl:px-52 '>
          <Home />
        </section>
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
