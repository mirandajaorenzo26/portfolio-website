import { useEffect, useState } from 'react';
import Button from '../../shared/Button';

import AboutIntro from './AboutIntro';
import Education from './Education';
import Experience from './Experience';

function About() {
  const tabs = document.querySelectorAll('.about-tab');
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    tabs.forEach((tab) => {
      if (tab.id == activeTab) {
        tab.classList.add('about-tab-active');
      } else {
        tab.classList.remove('about-tab-active');
      }
    });
  }, [activeTab]);

  const handleTabClick = (e, tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='animate__animated animate__backInLeft px-5 text-center md:px-20 lg:px-32 xl:px-56'>
      <div id='about' className='absolute top-[-120px]'></div>

      <div className=''>
        <h2 className='uppercase'>About me</h2>
        <strong className='text-2xl font-bold md:text-2xl'>
          A dedicated{' '}
          <span className='hover-underline-animation '>
            Frond-End Developer
          </span>{' '}
          from the Philippines.
        </strong>
      </div>
      <div className='my-5 flex flex-wrap justify-stretch gap-3 text-sm md:gap-5'>
        <Button
          id={1}
          text='Introduction'
          className='about-tab about-tab-active'
          handleClick={(e) => handleTabClick(e, 1)}
        />
        <Button
          id={2}
          text='Education'
          className='about-tab'
          handleClick={(e) => handleTabClick(e, 2)}
        />
        <Button
          id={3}
          text='Experience'
          className='about-tab '
          handleClick={(e) => handleTabClick(e, 3)}
        />
      </div>

      <div className='tab-content'>
        {activeTab === 1 && <AboutIntro />}
        {activeTab === 2 && <Education />}
        {activeTab === 3 && <Experience />}
      </div>
    </div>
  );
}

export default About;
