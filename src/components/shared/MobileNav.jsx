import { FaTimes } from 'react-icons/fa';
import NavMenu from './NavMenu';
import { MdOutlineLightMode } from 'react-icons/md';
import Button from './Button';

// eslint-disable-next-line react/prop-types
const MobileNav = ({ navRef, toggleNavBar, handleClick }) => {
  return (
    <nav
      ref={navRef}
      className='absolute left-0 top-0 z-10  min-h-screen min-w-full translate-x-[-100%] border-none bg-white px-5 py-5 shadow transition-all duration-500 dark:bg-navy-blue lg:hidden'>
      <button
        onClick={toggleNavBar}
        className='flex min-w-full justify-end lg:hidden'>
        <FaTimes size={32} />
      </button>
      <ul className='flex min-h-[80vh] flex-col justify-evenly gap-2 text-center '>
        <span className='cursor-pointer items-center gap-2 text-5xl font-bold'>
          JRM
        </span>
        <NavMenu text='Home' location='#home' />
        <NavMenu text='About' location='#about' />
        <NavMenu text='Skills' location='#skills' />
        <NavMenu text='Projects' location='#projects' />
        <NavMenu text='Get In Touch' location='#getInTouch' />
        <div className='my-5 flex flex-col justify-center gap-5 lg:hidden'>
          <div className='mx-auto'>
            <MdOutlineLightMode size={24} />
          </div>

          <Button
            text='Download CV'
            buttonType='primary-btn'
            handleClick={handleClick}
          />
        </div>
      </ul>
    </nav>
  );
};

export default MobileNav;
