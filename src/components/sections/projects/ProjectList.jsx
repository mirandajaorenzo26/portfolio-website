/* eslint-disable react/prop-types */
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div className='grid gap-5 md:grid-cols-2 '>
      {projects.map((project) => {
        return <ProjectItem key={project.title} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
