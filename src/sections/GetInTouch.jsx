import Form from '../components/sections-components/get-in-touch/Form';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';

function GetInTouch() {
  return (
    <div className='my-16'>
      <div id='contacts' className='absolute top-[-80px]'></div>

      <div className='grid gap-5 lg:grid-cols-2'>
        <div className='space-y-5'>
          <h2 className='mb-10 text-5xl font-bold uppercase lg:mt-5'>
            Love to hear from you, <br />
            Get In Touch!
          </h2>
          <div className='flex flex-wrap justify-start gap-5 md:flex-col font-semibold'>
            <a
              href='https://linkedin.com/in/mirandajaorenzo'
              target='_blank'
              rel='noreferrer'
              className='hover-underline-animation-inverted flex w-max gap-2'>
              <AiFillLinkedin size={24} />
              LinkedIn
            </a>
            <a
              href='https://github.com/mirandajaorenzo26'
              target='_blank'
              rel='noreferrer'
              className='hover-underline-animation-inverted flex w-max gap-2'>
              <AiFillGithub size={24} />
              GitHub
            </a>
            <a className='hover-underline-animation-inverted flex w-max gap-2' href='mailto:mirandajaorenzo@gmail.com'>
              <AiTwotoneMail size={24} />
              mirandajaorenzo@gmail.com
            </a>
          </div>
        </div>
        <div className='my-5 lg:my-0'>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
