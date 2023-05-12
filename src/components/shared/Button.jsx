/* eslint-disable react/prop-types */

const Button = ({ id, text, className, icon, link, target, handleClick }) => {
  return (
    <>
      {link && (
        <a href={link} target={target} rel='noreferrer' className="flex-1 lg:flex-grow-0"> 
          <button
            id={id}
            className={`${className} ${
              icon ? `flex items-center justify-center gap-2` : ''
            }`}
            onClick={handleClick}>
            {text}
            {icon}
          </button>
        </a>
      )}
      {!link && (
        <button
          id={id}
          className={`${className} ${
            icon ? `flex items-center justify-center gap-2` : ''
          }`}
          onClick={handleClick}>
          {text}
          {icon}
        </button>
      )}
    </>
  );
};

export default Button;
