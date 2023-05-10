import { useRef } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

import DownloadButton from '../components/shared/DownloadButton';
import Nav from '../components/navigation/Nav';
import MobileNav from '../components/navigation/MobileNav';
import ThemeToggle from '../components/shared/ThemeToggle';

import downloadCV from '../utils/downloadFile';
import Logo from '../components/shared/Logo';

const Header = () => {
  const navRef = useRef();

  // Helper function
  const toggleNavBar = () => {
    navRef.current.classList.toggle('translate-x-[100%]');
  };

  const handleClick = () => {
    downloadCV();
  };

  return (
    <header className='header animate__animated animate__slideInDown'>
      <div className='mr-5 flex-1 '>
        <Logo />
      </div>
      <Nav />

      <ThemeToggle className={'mr-5 lg:hidden'} />

      <MobileNav
        navRef={navRef}
        toggleNavBar={toggleNavBar}
        handleClick={handleClick}
      />
      <div className='my-10 ml-5 hidden flex-1 flex-col justify-end gap-5 lg:my-0 lg:flex lg:flex-row lg:items-center lg:justify-end'>
        <ThemeToggle />

        <DownloadButton
          text='Download CV'
          buttonType='primary-btn'
          handleClick={handleClick}
        />
      </div>
      <button onClick={toggleNavBar} className='lg:hidden'>
        <BiMenuAltRight size={32} />
      </button>
    </header>
  );
};

export default Header;
