import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import htmlIcon from '../../assets/images/HTML.png';
import cssIcon from '../../assets/images/CSS.png';
import jsIcon from '../../assets/images/JS.png';
import reactIcon from '../../assets/images/React.png';
import tailwindIcon from '../../assets/images/Tailwind.png';
import sassIcon from '../../assets/images/SASS.png';
import Button from '../shared/Button';
import mypicture from '../../assets/images/mirandajaorenzo.png';

function Home() {
  return (
    <section
      id='home'
      className='grid min-h-screen items-center  bg-semi-white px-5 pt-10 dark:bg-navy-blue lg:px-20 xl:px-52 '>
      <div className='my-5 flex min-h-[75vh] min-w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-white p-5 text-center dark:bg-light-navy-blue md:gap-0 xl:flex-row xl:gap-20 xl:text-left  '>
        {/* Left Col */}
        <div className='flex items-center gap-5 '>
          <div className='hidden flex-col gap-2 xl:flex'>
            {/* Github and LinkedIn Icons for Larger Screen*/}
            <a
              href='https://linkedin.com/in/mirandajaorenzo'
              target='_blank'
              rel='noreferrer'>
              <AiFillLinkedin
                size={42}
                className='deley-300 duration-300 ease-in-out hover:scale-125 hover:fill-light-navy-blue dark:hover:fill-white'
              />
            </a>
            <a
              href='https://github.com/mirandajaorenzo26'
              target='_blank'
              rel='noreferrer'>
              <AiFillGithub
                size={42}
                className='deley-300 duration-300 ease-in-out hover:scale-125 hover:fill-light-navy-blue dark:hover:fill-white'
              />
            </a>
          </div>
          <div className='m-5 flex flex-col gap-1 text-2xl lg:gap-2 lg:text-3xl  xl:gap-5 xl:text-4xl'>
            <p className=''>
              Hello!{' '}
              <svg
                className='inline w-10 animate-bounce cursor-default'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  className=' stroke-navy-blue dark:stroke-white'
                  d='M11 11.5V10.5C11 10.1022 11.158 9.72064 11.4393 9.43934C11.7206 9.15804 12.1022 9 12.5 9C12.8978 9 13.2794 9.15804 13.5607 9.43934C13.842 9.72064 14 10.1022 14 10.5V12'
                  strokeWidth='6%'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className=' stroke-navy-blue dark:stroke-white'
                  d='M17 12V5.5C17 5.10218 17.158 4.72064 17.4393 4.43934C17.7206 4.15804 18.1022 4 18.5 4C18.8978 4 19.2794 4.15804 19.5607 4.43934C19.842 4.72064 20 5.10218 20 5.5V16C20 17.5913 19.3679 19.1174 18.2426 20.2426C17.1174 21.3679 15.5913 22 14 22H12H12.208C11.2143 22.0002 10.2362 21.7535 9.36138 21.2823C8.48658 20.811 7.74252 20.1299 7.196 19.3C7.13041 19.2002 7.06508 19.1002 7 19C6.688 18.521 5.593 16.612 3.714 13.272C3.52245 12.9315 3.47128 12.5298 3.57138 12.1522C3.67148 11.7745 3.91495 11.4509 4.25 11.25C4.60688 11.0359 5.02507 10.9471 5.43816 10.9978C5.85125 11.0486 6.23554 11.2359 6.53 11.53L8 13'
                  strokeWidth='6%'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='  stroke-navy-blue dark:stroke-white'
                  d='M14 10.5C14 10.1022 14.158 9.72064 14.4393 9.43934C14.7206 9.15804 15.1022 9 15.5 9C15.8978 9 16.2794 9.15804 16.5607 9.43934C16.842 9.72064 17 10.1022 17 10.5V12M8 13V4.5C8 4.10218 8.15804 3.72064 8.43934 3.43934C8.72064 3.15804 9.10218 3 9.5 3C9.89782 3 10.2794 3.15804 10.5607 3.43934C10.842 3.72064 11 4.10218 11 4.5V12'
                  strokeWidth='6%'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </p>
            <p className=''>
              I am <span className=' font-semibold'>Jao Renzo Miranda.</span>
            </p>
            <strong className=' font-bold  lg:text-4xl xl:text-5xl'>
              Front-End Developer
            </strong>
            <div className='my-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold xl:justify-start xl:gap-7'>
              <p className='whitespace-nowrap'>Tech Stack | </p>
              <img
                className=' deley-300 duration-300 ease-in-out hover:scale-125'
                src={htmlIcon}
                alt='HTML Icon'
              />
              <img
                className=' deley-300 duration-300 ease-in-out hover:scale-125'
                src={cssIcon}
                alt='CSS Icon'
              />
              <img
                className=' deley-300 duration-300 ease-in-out hover:scale-125'
                src={jsIcon}
                alt='JavaScript Icon'
              />
              <img
                className=' deley-300 duration-300 ease-in-out hover:scale-125'
                src={reactIcon}
                alt='React Icon'
              />
              <img
                className=' deley-300 duration-300 ease-in-out hover:scale-125'
                src={tailwindIcon}
                alt='Tailwind Icon'
              />
              <img
                className=' deley-300 duration-300 ease-in-out hover:scale-125'
                src={sassIcon}
                alt='SASS Icon'
              />
            </div>
            <div className='md:mb- mb-5 flex flex-row items-center justify-center gap-2 xl:hidden'>
              <p className='text-sm'>Connect with me: </p>{' '}
              {/* Github and LinkedIn Icons for Mobile Screen*/}
              <a
                href='https://linkedin.com/in/mirandajaorenzo'
                target='_blank'
                rel='noreferrer'>
                <AiFillLinkedin
                  size={32}
                  className='hover:fill-light-navy-blue dark:hover:fill-white'
                />
              </a>
              <a
                href='https://github.com/mirandajaorenzo26'
                target='_blank'
                rel='noreferrer'>
                <AiFillGithub
                  size={32}
                  className='hover:fill-light-navy-blue dark:hover:fill-white'
                />
              </a>
            </div>
            <div className='flex flex-wrap justify-between gap-3 text-base lg:justify-start'>
              <Button text='Contact me' buttonType='primary-btn' />
              <Button text='Know more' buttonType='secondary-btn' />
              <Button text='View Projects' buttonType='tertiary-btn' />
            </div>
          </div>
        </div>
        {/* Right Col */}
        <div className='relative m-5 hidden  h-[50%] w-[20vw] flex-initial rounded-3xl md:block'>
          <img
            src={mypicture}
            alt='Jao Renzo Miranda'
            className='relative z-10 w-[100%] rounded-3xl'
          />
          <div className='absolute bottom-0 z-0 h-[60%] w-full rounded-3xl bg-semi-white drop-shadow-2xl dark:bg-navy-blue'></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
