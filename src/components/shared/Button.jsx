import PropTypes from 'prop-types';

const Button = ({ text, buttonType, handleClick }) => {
  return (
    <button
      className={`${buttonType} min-w-fit flex-1 md:flex-grow-0`}
      onClick={handleClick}>
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
