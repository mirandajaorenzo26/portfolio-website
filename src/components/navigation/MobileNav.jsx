import { AiOutlineClose } from 'react-icons/ai';
import NavMenu from './NavMenu';
import Button from '../shared/DownloadButton';

// eslint-disable-next-line react/prop-types
const MobileNav = ({ navRef, toggleNavBar, handleClick }) => {
  return (
    <nav
      ref={navRef}
      className='absolute right-0 top-0 z-50 min-h-screen min-w-[60vw] translate-x-[100%] border-none bg-neutral-white px-5 py-5 shadow-lg transition-all duration-500 dark:bg-neutral-black lg:hidden'>
      <button
        onClick={toggleNavBar}
        className='flex min-w-full justify-end lg:hidden'>
        <AiOutlineClose size={32} />
      </button>
      <ul className='flex min-h-[80vh] flex-col justify-evenly gap-2 text-center '>
        <NavMenu text='Home' location='#home' />
        <NavMenu text='About' location='#about' />
        <NavMenu text='Skills' location='#skills' />
        <NavMenu text='Projects' location='#projects' />
        <NavMenu text='Get In Touch' location='#contacts' />
        <div className='my-5 flex flex-col items-center justify-center gap-5 lg:hidden'>
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
