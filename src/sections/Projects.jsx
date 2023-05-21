import ProjectList from "../components/sections-components/projects/ProjectList";

import ageCalcScreenShot from "../assets/images/project-screenshots/age-calculator.png";
import todoListScreenShot from "../assets/images/project-screenshots/todo-list.png";
import dictionaryScreenShot from "../assets/images/project-screenshots/dictionary.png";
import calculatorScreenShot from "../assets/images/project-screenshots/basic-calculator.png";
import weatherAppScreenshot from "../assets/images/project-screenshots/weather-app.png";
import passwordGeneratorScreenshot from "../assets/images/project-screenshots/password-generator.png";
import getVaccinatedAppScreenshot from "../assets/images/project-screenshots/getvaccinated-app.png";
import filmSightAppScreenshot from "../assets/images/project-screenshots/film-sight.png";
function Projects() {
  const projects = [
    {
      type: "featured",
      image: dictionaryScreenShot,
      title: "Dictionary App",
      desc: "This project is a dictionary app built with React, Vite, and Tailwind. It utilizes the free Dictionary API to provide word definitions and related information. Additionally, I explored the useContext hook for state management.",
      techs: ["React + Vite", "Tailwind"],
      repoLink: "https://github.com/mirandajaorenzo26/dictionary/",
      liveLink: "https://mirandajaorenzo-dictionary.vercel.app/",
    },
    {
      type: "featured",
      image: todoListScreenShot,
      title: "Todo-List App",
      desc: "A simple todo list app that allows you to add and delete tasks. It utilizes local storage to store the list items, and provides filtering options for viewing All tasks, Active tasks, and Completed tasks.",
      techs: ["React + Vite", "Tailwind"],
      repoLink: "https://github.com/mirandajaorenzo26/todo-list/",
      liveLink: "https://mirandajaorenzo26.github.io/todo-list/",
    },
    {
      type: "featured",
      image: ageCalcScreenShot,
      title: "Age Calculator",
      desc: "The app allows users to enter their birthday and calculates their age in years, months, and days. This application is a challenge by Frontend Mentor and my first ever React Application.",
      techs: ["React + Vite"],
      repoLink: "https://github.com/mirandajaorenzo26/age-calculator",
      liveLink: "https://mirandajaorenzo26.github.io/age-calculator/",
    },
    {
      type: "other-project",
      image: passwordGeneratorScreenshot,
      title: "Password Generator",
      desc: "This is a simple password generator web application that generates random passwords with customizable criteria.",
      techs: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/mirandajaorenzo26/password-generator/",
      liveLink: "https://mirandajaorenzo26.github.io/password-generator/",
    },
    {
      type: "other-project",
      image: weatherAppScreenshot,
      title: "Weather App",
      desc: "A Simple and Mobile-Responsive Weather App with HTML, CSS, and JavaScript, Powered by OpenWeather's API.",
      techs: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/mirandajaorenzo26/weather-app/",
      liveLink: "https://mirandajaorenzo26.github.io/weather-app/",
    },
    {
      type: "other-project",
      image: calculatorScreenShot,
      title: "Basic Calculator",
      desc: "It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      techs: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/mirandajaorenzo26/calculator/",
      liveLink: "https://mirandajaorenzo26.github.io/calculator/",
    },
    {
      type: "web-design",
      image: getVaccinatedAppScreenshot,
      title: "GetVacinnated App",
      desc: "This is the design for an appointment scheduling system for COVID-19 vaccinations dedicated for our project in System Analysis and Design",
      techs: ["Figma"],
      link: "https://www.figma.com/file/deIP5O2NT0WJJaM5mf0FWk/GetVaccinated-App?type=design&node-id=0%3A1&t=Vplerl7i69s2XNz4-1",
    },
    {
      type: "web-design",
      image: filmSightAppScreenshot,
      title: "Film Sight",
      desc: "This is the design for a movie search app for our project in Mobile App Development.",
      techs: ["Figma"],
      link: "https://www.figma.com/file/2ZKmyfxdD99FhsUc0PxnCr/Film-Sight?type=design&node-id=0%3A1&t=boXHTuUPWaHH2V0P-1",
    },
  ];
  return (
    <div className="">
      <div id="projects" className="absolute top-[-80px]"></div>
      <h2 className="mb-10 text-center text-xl font-bold uppercase lg:text-4xl">
        My Projects
      </h2>
      <div>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

export default Projects;
