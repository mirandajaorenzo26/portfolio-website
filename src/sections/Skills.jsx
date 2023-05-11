import htmlLogo from '../assets/images/technologies/HTML.png';
import cssLogo from '../assets/images/technologies/CSS.png';
import jsLogo from '../assets/images/technologies/JS.png';
import tsLogo from '../assets/images/technologies/TS.png';
import reactLogo from '../assets/images/technologies/React.png';
import tailwindLogo from '../assets/images/technologies/Tailwind.png';
import bootstrapLogo from '../assets/images/technologies/Bootstrap.png';
import sassLogo from '../assets/images/technologies/SASS.png';
import angularLogo from '../assets/images/technologies/Angular.png';
import nodejsLogo from '../assets/images/technologies/NodeJs.png';
import firebaseLogo from '../assets/images/technologies/Firebase.png';
import gitLogo from '../assets/images/technologies/Git.png';
import githubLogo from '../assets/images/technologies/Github.png';
import npmLogo from '../assets/images/technologies/npm.png';
import viteLogo from '../assets/images/technologies/Vite.png';
import webpackLogo from '../assets/images/technologies/Webpack.png';
import figmaLogo from '../assets/images/technologies/Figma.png';

import { RxCross2 } from 'react-icons/rx';

import { useState, useRef, useEffect } from 'react';

import TechnologyItem from '../components/sections-components/skills/TechnologyItem';

function Skills() {
  const technologies = [
    {
      icon: htmlLogo,
      name: 'HTML',
      type: 'frontend',
      status: 1,
    },
    {
      icon: cssLogo,
      name: 'CSS',
      type: 'frontend',
      status: 1,
    },
    {
      icon: jsLogo,
      name: 'JavaScript',
      type: 'frontend',
      status: 1,
    },
    {
      icon: tsLogo,
      name: 'TypeScript',
      type: 'frontend',
      status: 2,
    },
    {
      icon: reactLogo,
      name: 'React',
      type: 'frontend',
      status: 1,
    },
    {
      icon: angularLogo,
      name: 'Angular',
      type: 'frontend',
      status: 3,
    },
    {
      icon: tailwindLogo,
      name: 'Tailwind',
      type: 'frontend',
      status: 1,
    },
    {
      icon: bootstrapLogo,
      name: 'Bootstrap',
      type: 'frontend',
      status: 2,
    },
    {
      icon: sassLogo,
      name: 'SASS',
      type: 'frontend',
      status: 3,
    },
    {
      icon: nodejsLogo,
      name: 'NodeJs',
      type: 'backend',
      status: 3,
    },
    {
      icon: firebaseLogo,
      name: 'Firebase',
      type: 'backend',
      status: 3,
    },
    {
      icon: gitLogo,
      name: 'Git',
      type: 'tools',
      status: 1,
    },
    {
      icon: githubLogo,
      name: 'Github',
      type: 'tools',
      status: 1,
    },
    {
      icon: npmLogo,
      name: 'npm',
      type: 'tools',
      status: 1,
    },
    {
      icon: viteLogo,
      name: 'Vite',
      type: 'tools',
      status: 1,
    },
    {
      icon: webpackLogo,
      name: 'Webpack',
      type: 'tools',
      status: 2,
    },
    {
      icon: figmaLogo,
      name: 'Figma',
      type: 'tools',
      status: 1,
    },
  ];

  const [activeFilter, setActiveFilter] = useState([1, 2, 3]);
  const mostUsedFilter = useRef();
  const alternativeFilter = useRef();
  const familiarFilter = useRef();

  const toggleFilter = (e, id) => {
    if (activeFilter.includes(id)) {
      setActiveFilter(() => {
        return activeFilter.filter((x) => x !== id);
      });
    } else {
      if (!activeFilter.includes(id)) {
        setActiveFilter(() => {
          return [...activeFilter, id];
        });
      }
    }
  };

  useEffect(() => {
    if (activeFilter.includes(1))
      mostUsedFilter.current.classList.add('skill-filter-active');
    else {
      mostUsedFilter.current.classList.remove('skill-filter-active');
    }
    if (activeFilter.includes(2))
      alternativeFilter.current.classList.add('skill-filter-active');
    else {
      alternativeFilter.current.classList.remove('skill-filter-active');
    }
    if (activeFilter.includes(3))
      familiarFilter.current.classList.add('skill-filter-active');
    else {
      familiarFilter.current.classList.remove('skill-filter-active');
    }
  }, [activeFilter]);

  return (
    <div className='text-center'>
      <div id='skills' className='absolute top-[-80px]'></div>

      <h2 className='text-2xl font-bold uppercase'>Technologies that I use</h2>
      {/* Filter */}
      <div className=' my-5 flex flex-wrap items-center justify-center gap-5 text-xs lg:flex-row'>
        <p className='font-semibold text-gray-600'>Filters: </p>
        <div
          ref={mostUsedFilter}
          className='skill-filter  '
          onClick={(e) => toggleFilter(e, 1)}>
          <div className='mr-1 flex h-3 w-3 rounded-full bg-green-600'></div>{' '}
          <p>Most Used</p>
          {activeFilter.includes(1) && <RxCross2 size={16} />}
        </div>
        <div
          ref={alternativeFilter}
          className='skill-filter  '
          onClick={(e) => toggleFilter(e, 2)}>
          <div className='mr-1 flex h-3 w-3 rounded-full bg-violet-600'></div>{' '}
          <p>Alternatives</p>
          {activeFilter.includes(2) && <RxCross2 size={16} />}
        </div>
        <div
          ref={familiarFilter}
          className='skill-filter  '
          onClick={(e) => toggleFilter(e, 3)}>
          <div className='mr-1 flex h-3 w-3 rounded-full bg-red-600'></div>{' '}
          <p>With Basic Knowledge</p>
          {activeFilter.includes(3) && <RxCross2 size={16} />}
        </div>
      </div>
      {/* ------------- */}
      <div className='grid gap-5 lg:grid-cols-2'>
        <div className='rounded-xl bg-dark-neutral-white p-5 dark:bg-light-neutral-black lg:col-span-2'>
          <h3 className='mb-5 text-lg font-bold'>Front-End Technologies</h3>

          <div className='flex flex-wrap justify-center gap-5'>
            {technologies.filter(
              (tech) =>
                activeFilter.includes(tech.status) && tech.type === 'frontend'
            ).length === 0 && <p>No front-end tech available</p>}
            {activeFilter.length !== 0 &&
              technologies
                .filter(
                  (tech) =>
                    activeFilter.includes(tech.status) &&
                    tech.type === 'frontend'
                )
                .map((tech) => (
                  <TechnologyItem
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    status={tech.status}
                  />
                ))}
          </div>
        </div>
        <div className='rounded-xl bg-dark-neutral-white p-5 dark:bg-light-neutral-black'>
          <h3 className='mb-5 text-lg font-bold'>
            Back-End Technologies and Databases
          </h3>

          <div className='flex flex-wrap justify-center gap-5'>
            {technologies.filter(
              (tech) =>
                activeFilter.includes(tech.status) && tech.type === 'backend'
            ).length === 0 && <p>No back-end tech and databases available</p>}
            {activeFilter.length !== 0 &&
              technologies
                .filter(
                  (tech) =>
                    activeFilter.includes(tech.status) &&
                    tech.type === 'backend'
                )
                .map((tech) => (
                  <TechnologyItem
                    className='animate__animated animate__bounce'
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    status={tech.status}
                  />
                ))}
          </div>
        </div>
        <div className='rounded-xl bg-dark-neutral-white p-5 dark:bg-light-neutral-black '>
          <h3 className='mb-5 text-lg font-bold'>
            Other Tools for Web Dev / Web Design
          </h3>
          <div className='flex flex-wrap justify-center gap-5'>
            {technologies.filter(
              (tech) =>
                activeFilter.includes(tech.status) && tech.type === 'tools'
            ).length === 0 && <p>No tools available</p>}
            {activeFilter.length !== 0 &&
              technologies
                .filter(
                  (tech) =>
                    activeFilter.includes(tech.status) && tech.type === 'tools'
                )
                .map((tech) => (
                  <TechnologyItem
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    status={tech.status}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
