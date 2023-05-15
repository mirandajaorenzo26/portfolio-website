import PropTypes from 'prop-types';

const NavMenu = ({ text, location }) => {
  return (
    <a href={location}>
      <li className='nav-menu'>{text}</li>
    </a>
  );
};

NavMenu.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default NavMenu;
