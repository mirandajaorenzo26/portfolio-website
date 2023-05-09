import HeroSection from '../../layout/HeroSection';
import Introduction from './Introduction';
import MyImage from './MyImage';

function Home() {
  return (
    <div className='grid h-full items-center pt-[80px]' id='home'>
      <div id='home' className='absolute top-[80px]'></div>
      <div className='animate__animated animate__slideInUp item-center z-10 my-5 grid rounded-3xl bg-white p-5 shadow-lg dark:bg-light-navy-blue'>
        <HeroSection left={Introduction} right={MyImage} />
      </div>
    </div>
  );
}

export default Home;
