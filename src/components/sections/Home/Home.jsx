import HeroSection from '../../layout/HeroSection';
import Introduction from './Introduction';
import MyImage from './MyImage';
function Home() {
  return (
    <div className='grid h-full items-center bg-semi-white pt-[80px] dark:bg-navy-blue '>
      <div className='animate__animated animate__slideInUp item-center my-5 grid rounded-3xl bg-white p-5 shadow-lg dark:bg-light-navy-blue'>
        <HeroSection left={Introduction} right={MyImage} />
      </div>
    </div>
  );
}

export default Home;
