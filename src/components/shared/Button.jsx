/* eslint-disable react/prop-types */

const Button = ({ id, text, buttonType, icon, handleClick }) => {
  return (
    <button
      id={id}
      className={`${buttonType} ${
        icon ? 'flex items-center justify-center gap-2' : ''
      }`}
      onClick={handleClick}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
