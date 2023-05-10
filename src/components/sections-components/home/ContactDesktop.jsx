import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function ContactDesktop() {
  return (
    <div className='hidden flex-col gap-5 xl:flex'>
      {/* Github and LinkedIn Icons for Larger Screen*/}
      <a
        href='https://linkedin.com/in/mirandajaorenzo'
        target='_blank'
        rel='noreferrer'>
        <AiFillLinkedin
          size={42}
          className='deley-300 duration-300 ease-in-out hover:scale-125 hover:fill-light-navy-blue dark:hover:fill-white'
        />
      </a>
      <a
        href='https://github.com/mirandajaorenzo26'
        target='_blank'
        rel='noreferrer'>
        <AiFillGithub
          size={42}
          className='deley-300 duration-300 ease-in-out hover:scale-125 hover:fill-light-navy-blue dark:hover:fill-white'
        />
      </a>
    </div>
  );
}
