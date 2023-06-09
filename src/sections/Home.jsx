import HeroSection from '../components/layout/HeroSection';
import Introduction from '../components/sections-components/home/Introduction';
import MyImage from '../components/sections-components/home/MyImage';

function Home() {
  return (
    <div className='grid h-full items-center pt-[80px]' id='home'>
      <div id='home' className='absolute top-[80px]'></div>
      <div className='animate__animated animate__slideInUp item-center z-10  grid'>
        <HeroSection left={Introduction} right={MyImage} />
      </div>
    </div>
  );
}

export default Home;
