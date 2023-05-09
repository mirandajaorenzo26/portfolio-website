/* eslint-disable react/prop-types */
import ProjectItem from './ProjectItem';
import { Carousel } from 'antd';

function ProjectList({ projects }) {
  return (
    <>
      {/*  Featured Project Carousel  */}
      <div className='overflow-hidden rounded-xl'>
        <Carousel autoplay effect='fade'>
          {projects
            .filter((project) => project.type === 'featured')
            .map((project) => {
              return <ProjectItem key={project.title} project={project} />;
            })}
        </Carousel>
      </div>

      {/*  Other Projects */}
      <h3 className='my-5 font-bold text-gray-600 dark:text-gray-200'>
        Mini Projects
      </h3>
      <div className='grid gap-5 md:grid-cols-3 '>
        {projects
          .filter((project) => project.type === 'other-project')
          .map((project) => {
            return <ProjectItem key={project.title} project={project} />;
          })}
      </div>

      {/*  Web Design Projects */}
      <h3 className='my-5 font-bold text-gray-600 dark:text-gray-200'>
        Web Design Projects
      </h3>
      <div className='grid gap-5 md:grid-cols-3 '>
        {projects
          .filter((project) => project.type === 'web-design')
          .map((project) => {
            return (
              <ProjectItem
                key={project.title}
                project={project}
                additionalClassName={'col-span-3'}
              />
            );
          })}
      </div>
    </>
  );
}

export default ProjectList;
