/* eslint-disable react/prop-types */

const Button = ({ id, text, className, icon, link, target, handleClick }) => {
  return (
    <a href={link} target={target} rel='noreferrer'>
      <button
        id={id}
        className={`${className} ${
          icon && `flex items-center justify-center gap-2`
        }`}
        onClick={handleClick}>
        {text}
        {icon}
      </button>
    </a>
  );
};

export default Button;
