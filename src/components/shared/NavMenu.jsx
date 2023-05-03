import PropTypes from 'prop-types';

const NavMenu = ({ text, location }) => {
  return (
    <li className='whitespace-nowrap px-5 py-2 uppercase duration-150 hover:rounded-full hover:bg-semi-white hover:font-semibold dark:hover:bg-light-navy-blue md:hover:scale-105'>
      <a href={location} className='nav-menu'>
        {text}
      </a>
    </li>
  );
};

NavMenu.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default NavMenu;
