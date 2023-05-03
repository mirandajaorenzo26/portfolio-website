import NavMenu from './NavMenu';
import { MdOutlineLightMode } from 'react-icons/md';
import Button from './Button';

const Nav = () => {
  return (
    <nav className='flex-2 fixed hidden min-w-full px-10 py-5 text-center lg:relative lg:-z-0 lg:flex lg:min-h-fit lg:min-w-fit lg:justify-center lg:p-0'>
      <ul className='gap-2 lg:flex'>
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

export default Nav;
