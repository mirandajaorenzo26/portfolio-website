import PropTypes from 'prop-types';

const NavMenu = ({ text, location }) => {
  return (
    <li className='uppercase whitespace-nowrap px-3 py-2 hover:font-semibold hover:bg-semi-white md:hover:rounded-full'>
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
