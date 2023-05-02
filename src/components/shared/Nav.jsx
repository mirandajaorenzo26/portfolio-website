import NavMenu from './NavMenu';
import { MdOutlineLightMode } from 'react-icons/md';
import Button from './Button';

const Nav = () => {
  return (
    <nav className='hidden px-10 py-5 absolute top-0 left-0 min-w-full text-center bg-white shadow flex-2 lg:p-0 lg:relative lg:min-w-fit lg:min-h-fit lg:shadow-transparent  lg:flex lg:justify-center'>
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

export default Nav;
