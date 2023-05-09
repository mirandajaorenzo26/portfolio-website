import NavMenu from './NavMenu';

const Nav = () => {
  return (
    <nav className='flex-2 fixed hidden min-w-full px-10 py-5 text-center lg:relative lg:-z-0 lg:flex lg:min-h-fit lg:min-w-fit lg:justify-center lg:p-0'>
      <ul className='gap-2 lg:flex'>
        <NavMenu text='Home' location='#home' />
        <NavMenu text='About' location='#about' />
        <NavMenu text='Skills' location='#skills' />
        <NavMenu text='Projects' location='#projects' />
        <NavMenu text='Get In Touch' location='#contacts' />
      </ul>
    </nav>
  );
};

export default Nav;
