import PropTypes from 'prop-types';

const Button = ({ text, buttonType, icon, handleClick }) => {
  return (
    <button
      className={`${buttonType} ${
        icon ? 'flex items-center justify-center gap-2' : ''
      }`}
      onClick={handleClick}>
      {text}
      {icon}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  icon: PropTypes.func,
};

export default Button;
