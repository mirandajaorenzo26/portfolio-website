/* eslint-disable react/prop-types */
import ProjectListLayout from '../../layout/ProjectListLayout';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <ProjectListLayout
      featured={projects
        .filter((project) => project.type === 'featured')
        .map((project) => {
          return <ProjectItem key={project.title} project={project} />;
        })}
      otherProjects={projects
        .filter((project) => project.type === 'other-project')
        .map((project) => {
          return <ProjectItem key={project.title} project={project} />;
        })}
      webDesignProject={projects
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
    />
  );
}

export default ProjectList;
