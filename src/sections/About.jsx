import AboutIntro from '../components/sections-components/about/AboutIntro';
import Schools from '../components/sections-components/about/Schools';
import Experience from '../components/sections-components/about/Experience';
import { AboutLayout } from '../components/layout/AboutLayout';
import gradpic from '../assets/images/mygradpic.png';
function About() {
  return (
    <div className='animate__animated animate__backInLeft'>
      <div id='about' className='absolute top-[-120px]'></div>
      <AboutLayout
        left={<img className='h-full w-full object-cover' src={gradpic}></img>}
        right={<AboutIntro />}
      />
    </div>
  );
}

export default About;
