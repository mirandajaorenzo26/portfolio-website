/* eslint-disable react/prop-types */
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink, FiFigma } from 'react-icons/fi';

import Button from '../../shared/Button';

function ProjectItem({ project, additionalClassName }) {
  return (
    <div
      className={`relative flex ${
        project.type === 'featured' ? 'min-h-[50vh]' : ''
      } flex-col justify-end overflow-hidden rounded-xl p-5 py-10 duration-300 lg:px-7 ${additionalClassName}`}>
      <img
        src={project.image}
        className=' absolute bottom-0 left-0 h-full w-full object-cover brightness-50'
      />
      <div className=' absolute inset-0 bg-gradient-to-t from-black dark:from-light-neutral-black'></div>
      <p
        className={`z-10 py-1 ${
          project.type === 'featured' ? 'text-2xl' : 'text-sm'
        } font-bold text-neutral-white`}>
        {project.title}
      </p>
      <p
        className={`z-10 ${
          project.type === 'featured' ? 'text-sm md:text-base' : 'text-xs'
        } text-gray-300 lg:line-clamp-3`}>
        {project.desc}
      </p>
      <div className='z-10 my-3 flex flex-wrap gap-x-5 gap-y-2'>
        {project.techs.map((tech) => {
          return (
            <div
              key={tech}
              className='rounded-md p-2 text-xs font-semibold text-neutral-white'>
              {tech}
            </div>
          );
        })}
      </div>

      <div className='z-10 flex w-max flex-wrap  gap-2'>
        {(project.type === 'featured' || project.type === 'other-project') && (
          <Button
            className={'view-code-btn'}
            text={'View Code'}
            icon={<AiFillGithub size={16} />}
            link={project.repoLink}
            target={'_blank'}
          />
        )}
        {project.type === 'web-design' && (
          <Button
            className={'view-code-btn'}
            text={'View in Figma'}
            icon={<FiFigma size={16} />}
            link={project.link}
            target={'_blank'}
          />
        )}

        {(project.type === 'featured' || project.type === 'other-project') && (
          <Button
            className={'live-site-btn'}
            text={'Live Site'}
            icon={<FiExternalLink size={16} />}
            link={project.liveLink}
            target={'_blank'}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
