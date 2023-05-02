import PropTypes from 'prop-types';

const Button = ({ text, buttonType }) => {
  return <button className={`${buttonType} whitespace-nowrap`}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
