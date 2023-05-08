import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='flex w-full items-center justify-center gap-2'>
        <p className=' my-5 font-normal'>
          Designed & Developed by Jao Renzo Miranda
        </p>
        <a
          href='https://linkedin.com/in/mirandajaorenzo'
          target='_blank'
          rel='noreferrer'
          className='flex gap-2'>
          <AiFillLinkedin
            size={32}
            className='deley-300 duration-300 ease-in-out hover:scale-125'
          />
        </a>
        <a
          href='https://github.com/mirandajaorenzo26'
          target='_blank'
          rel='noreferrer'
          className='flex gap-2'>
          <AiFillGithub
            size={32}
            className='deley-300 duration-300 ease-in-out hover:scale-125'
          />
        </a>
      </div>
    </footer>
  );
}
