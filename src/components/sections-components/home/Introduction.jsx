import Button from '../../shared/Button';
import TechStack from './TechStack';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Introduction() {
  return (
    <div className='h-full lg:text-left'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-xl'>
        Hello! I&apos;m <span className='font-bold underline-offset-8 underline'>Jao Renzo Miranda.</span>
        </h1>
        <strong className='font-bold text-5xl'>
          A FRONT-END DEVELOPER
        </strong>
        <TechStack />
        <p className='mb-3 text-sm md:text-base md:pr-16'>A graduating student who's passionate about all things web development. I've spent countless hours studying and perfecting my skills in front-end development, and web design. I'm excited to take my skills to the next level as I start on my career in the field, and I can't wait to see what the future holds!</p>

        <div className='flex flex-wrap gap-2'>
          <Button
            text='Contact me'
            className='primary-btn '
            link={'#contacts'}
            target={'_self'}
          />
          <Button
            text='Know more'
            className='secondary-btn'
            link={'#about'}
            target={'_self'}
          />
          <Button
            text='View Projects'
            className='tertiary-btn'
            link={'#projects'}
            target={'_self'}
          />
        </div>
      </div>
    </div>
  );
}
