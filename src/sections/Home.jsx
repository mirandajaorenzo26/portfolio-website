import HeroSection from '../components/layout/HeroSection';
import Introduction from '../components/sections-components/home/Introduction';
import MyImage from '../components/sections-components/home/MyImage';

function Home() {
  return (
    <div className='grid h-full items-center pt-[80px]' id='home'>
      <div id='home' className='absolute top-[80px]'></div>
      <div className='animate__animated animate__slideInUp item-center bg-neutral-white z-10 my-5 grid rounded-3xl shadow-xl dark:bg-light-neutral-black md:p-5'>
        <HeroSection left={Introduction} right={MyImage} />
      </div>
    </div>
  );
}

export default Home;
