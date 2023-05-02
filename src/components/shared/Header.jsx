import { FaBars } from 'react-icons/fa';
import Button from './Button';
import { MdOutlineLightMode } from 'react-icons/md';
import Nav from './Nav';
import { useRef } from 'react';
import MobileNav from './MobileNav';

const Header = () => {
  const navRef = useRef();

  const toggleNavBar = () => {
    navRef.current.classList.toggle('translate-x-[-100%]');
  };

  return (
    <header className='px-10 py-5 fixed min-w-full bg-white shadow flex  lg:min-h-fit lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-30 xl:px-52'>
      <span className=' mr-5 flex-1 text-2xl font-bold flex items-center gap-2 cursor-pointer'>
        JRM
      </span>
      <Nav />
      <MobileNav navRef={navRef} toggleNavBar={toggleNavBar} />
      <div className='hidden my-10 ml-5 gap-5 lg:flex flex-1 flex-col justify-end lg:my-0 lg:flex-row lg:items-center lg:justify-end'>
        <MdOutlineLightMode size={24} />
        <Button text='Download CV' buttonType='primary-btn' />
      </div>
      <button onClick={toggleNavBar} className='lg:hidden'>
        <FaBars size={24} />
      </button>
    </header>
  );
};

export default Header;
