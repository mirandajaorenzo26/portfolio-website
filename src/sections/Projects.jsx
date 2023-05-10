import ProjectList from '../components/sections-components/projects/ProjectList';

import ageCalcScreenShot from '../assets/images/project-screenshots/age-calculator.png';
import todoListScreenShot from '../assets/images/project-screenshots/todo-list.png';
import calculatorScreenShot from '../assets/images/project-screenshots/basic-calculator.png';
import weatherAppScreenshot from '../assets/images/project-screenshots/weather-app.png';
import passwordGeneratorScreenshot from '../assets/images/project-screenshots/password-generator.png';
import getVaccinatedAppScreenshot from '../assets/images/project-screenshots/getvaccinated-app.png';
function Projects() {
  const projects = [
    {
      type: 'featured',
      image: ageCalcScreenShot,
      title: 'Age Calculator',
      desc: 'The app allows users to enter their birthdate and calculates their age in years, months, and days. This application is a challenge by Frontend Mentor and my first ever React Application.',
      techs: ['React + Vite'],
      repoLink: 'https://github.com/mirandajaorenzo26/age-calculator',
      liveLink: 'https://mirandajaorenzo26.github.io/age-calculator/',
    },
    {
      type: 'featured',
      image: todoListScreenShot,
      title: 'Todo-List App',
      desc: 'A simple todo list app that allows you to add and delete tasks. It utilizes local storage to store the list items, and provides filtering options for viewing All tasks, Active tasks, and Completed tasks.',
      techs: ['React + Vite', 'Tailwind'],
      repoLink: 'https://github.com/mirandajaorenzo26/todo-list/',
      liveLink: 'https://mirandajaorenzo26.github.io/todo-list/',
    },
    {
      type: 'other-project',
      image: calculatorScreenShot,
      title: 'Basic Calculator',
      desc: 'It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      repoLink: 'https://github.com/mirandajaorenzo26/calculator/',
      liveLink: 'https://mirandajaorenzo26.github.io/calculator/',
    },
    {
      type: 'other-project',
      image: weatherAppScreenshot,
      title: 'Weather App',
      desc: "A Simple and Mobile-Responsive Weather App with HTML, CSS, and JavaScript, Powered by OpenWeather's API.",
      techs: ['HTML', 'CSS', 'JavaScript'],
      repoLink: 'https://github.com/mirandajaorenzo26/weather-app/',
      liveLink: 'https://mirandajaorenzo26.github.io/weather-app/',
    },
    {
      type: 'other-project',
      image: passwordGeneratorScreenshot,
      title: 'Password Generator',
      desc: 'This is a simple password generator web application that generates random passwords with customizable criteria.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      repoLink: 'https://github.com/mirandajaorenzo26/password-generator/',
      liveLink: 'https://mirandajaorenzo26.github.io/password-generator/',
    },
    {
      type: 'web-design',
      image: getVaccinatedAppScreenshot,
      title: 'GetVacinnated App',
      desc: 'This is a design for an appointment scheduling system for COVID-19 vaccinations.',
      techs: ['Figma'],
      link: 'https://www.figma.com/file/deIP5O2NT0WJJaM5mf0FWk/GetVaccinated-App?type=design&node-id=0%3A1&t=Vplerl7i69s2XNz4-1',
    },
  ];
  return (
    <div className=''>
      <div id='projects' className='absolute top-[-80px]'></div>

      <h2 className='mb-5 text-center text-2xl font-bold uppercase'>
        My Projects
      </h2>
      <div className='overflow-hidden rounded-xl '>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

export default Projects;