import PropTypes from 'prop-types';

const Button = ({ text, buttonType, handleClick }) => {
  return (
    <button className={`${buttonType}`} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
