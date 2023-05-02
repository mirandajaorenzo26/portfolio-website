import { FaTimes } from 'react-icons/fa';
import NavMenu from './NavMenu';
import { MdOutlineLightMode } from 'react-icons/md';
import Button from './Button';

const MobileNav = ({ navRef, toggleNavBar }) => {
  return (
    <nav
      ref={navRef}
      className='bg-white border-none shadow absolute min-h-screen min-w-full top-0 left-0 px-10 py-5 translate-x-[-100%] transition-all duration-500 lg:hidden'>
      <button
        onClick={toggleNavBar}
        className='min-w-full flex justify-end lg:hidden
      '>
        <FaTimes size={32} />
      </button>
      <ul className='lg:flex gap-2'>
        <NavMenu text='Home' location='#home' />
        <NavMenu text='About' location='#about' />
        <NavMenu text='Skills' location='#skills' />
        <NavMenu text='Projects' location='#projects' />
        <NavMenu text='Get In Touch' location='#getInTouch' />
        <div className='my-5 flex flex-col justify-center gap-5 lg:hidden'>
          <div className='mx-auto'>
            <MdOutlineLightMode size={24} />
          </div>

          <Button text='Download CV' buttonType='primary-btn' />
        </div>
      </ul>
    </nav>
  );
};

export default MobileNav;
