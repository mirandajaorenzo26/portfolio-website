import ProjectList from './ProjectList';

import ageCalcScreenShot from '../../../assets/images/project-screenshots/age-calculator.png';
import todoListScreenShot from '../../../assets/images/project-screenshots/todo-list.png';

function Projects() {
  const projects = [
    {
      image: ageCalcScreenShot,
      title: 'Age Calculator',
      desc: 'The app allows users to enter their birthdate and calculates their age in years, months, and days. This application is a challenge by Frontend Mentor and my first ever React Application.',
      techs: ['React + Vite'],
      repoLink: 'https://github.com/mirandajaorenzo26/age-calculator',
      liveLink: 'https://mirandajaorenzo26.github.io/age-calculator/',
    },
    {
      image: todoListScreenShot,
      title: 'Todo-List App',
      desc: 'A simple todo list app that allows you to add and delete tasks. It utilizes local storage to store the list items, and provides filtering options for viewing All tasks, Active tasks, and Completed tasks.',
      techs: ['React + Vite', 'Tailwind', 'HTML', 'CSS', 'JavaScript'],
      repoLink: 'https://github.com/mirandajaorenzo26/todo-list/',
      liveLink: 'https://mirandajaorenzo26.github.io/todo-list/',
    },
  ];
  return (
    <div className='mx-5'>
      <div id='projects' className='absolute top-[-80px]'></div>

      <h2 className='py-5 text-center text-2xl font-bold uppercase'>
        Projects
      </h2>
      <h3 className='py-5 font-bold text-gray-400'>Featured Projects</h3>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Projects;
