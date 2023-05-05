import PropTypes from 'prop-types';

const NavMenu = ({ text, location }) => {
  return (
    <li className='nav-menu'>
      <a href={location}>{text}</a>
    </li>
  );
};

NavMenu.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default NavMenu;
