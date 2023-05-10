import { useEffect, useState } from 'react';
import Button from '../components/shared/Button';

import AboutIntro from '../components/sections-components/about/AboutIntro';
import Schools from '../components/sections-components/about/Schools';
import Experience from '../components/sections-components/about/Experience';

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
    <div className='animate__animated animate__backInLeft text-center '>
      <div id='about' className='absolute top-[-120px]'></div>
      <div>
        <h2 className='text-sm font-light uppercase'>About me</h2>
        <strong className='text-2xl font-bold md:text-2xl'>
          A aspiring{' '}
          <span className='hover-underline-animation '>
            Front-end Developer
          </span>{' '}
          from the Philippines.
        </strong>
      </div>
      <div className='my-5 grid gap-5 text-sm md:grid-cols-3 lg:mx-32 xl:mx-52'>
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

      <div>
        {activeTab === 1 && <AboutIntro />}
        {activeTab === 2 && <Schools />}
        {activeTab === 3 && <Experience />}
      </div>
    </div>
  );
}

export default About;
