import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function ContactMobile() {
  return (
    <div className=' mb-5 flex flex-row items-center justify-center gap-2 lg:hidden lg:justify-start'>
      <p className='text-sm'>Connect with me: </p>{' '}
      {/* Github and LinkedIn Icons for Mobile Screen*/}
      <a
        href='https://linkedin.com/in/mirandajaorenzo'
        target='_blank'
        rel='noreferrer'>
        <AiFillLinkedin
          size={32}
          className='icon hover:fill-light-neutral-black dark:hover:fill-neutral-white'
        />
      </a>
      <a
        href='https://github.com/mirandajaorenzo26'
        target='_blank'
        rel='noreferrer'>
        <AiFillGithub
          size={32}
          className='icon hover:fill-light-neutral-black dark:hover:fill-neutral-white'
        />
      </a>
    </div>
  );
}
