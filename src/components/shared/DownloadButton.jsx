/* eslint-disable react/prop-types */

const DownloadButton = ({ text, buttonType, handleClick }) => {
  return (
    <button
      className={`${buttonType} min-w-fit flex-1 md:flex-grow-0`}
      onClick={handleClick}>
      {text}
    </button>
  );
};

export default DownloadButton;
