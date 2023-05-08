import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';

import DownloadButton from './shared/DownloadButton';
import Nav from './navigation/Nav';
import MobileNav from './navigation/MobileNav';
import ThemeToggle from './ThemeToggle';

import downloadCV from '../functions/downloadCV';
import Logo from './Logo';

const Header = () => {
  const navRef = useRef();

  // Helper function
  const toggleNavBar = () => {
    navRef.current.classList.toggle('translate-x-[-100%]');
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
        <FaBars size={32} />
      </button>
    </header>
  );
};

export default Header;
