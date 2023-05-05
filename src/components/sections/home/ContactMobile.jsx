import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function ContactMobile() {
  return (
    <div className='md:mb- mb-5 flex flex-row items-center justify-center gap-2 xl:hidden'>
      <p className='text-sm'>Connect with me: </p>{' '}
      {/* Github and LinkedIn Icons for Mobile Screen*/}
      <a
        href='https://linkedin.com/in/mirandajaorenzo'
        target='_blank'
        rel='noreferrer'>
        <AiFillLinkedin
          size={32}
          className='hover:fill-light-navy-blue dark:hover:fill-white'
        />
      </a>
      <a
        href='https://github.com/mirandajaorenzo26'
        target='_blank'
        rel='noreferrer'>
        <AiFillGithub
          size={32}
          className='hover:fill-light-navy-blue dark:hover:fill-white'
        />
      </a>
    </div>
  );
}
