/* eslint-disable react/prop-types */
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import Button from '../../shared/Button';

function ProjectItem({ project }) {
  return (
    <div
      className={`relative flex h-[50vh] w-full  flex-col justify-end overflow-hidden rounded-3xl border border-navy-blue p-5 shadow-slate-50 duration-300 hover:scale-105 hover:shadow-lg lg:p-10`}>
      <img
        src={project.image}
        className='absolute bottom-0 left-0 h-full  w-full object-cover'
      />
      <div className='via-slate-700-600 absolute inset-0 bg-gradient-to-t from-navy-blue via-light-navy-blue'></div>
      <p className='z-10 py-1 text-lg font-bold'>{project.title}</p>
      <p className='z-10 text-xs text-gray-300 lg:line-clamp-3'>
        {project.desc}
      </p>
      <div className='z-10 my-3 flex flex-wrap gap-x-5 gap-y-2'>
        {project.techs.map((tech) => {
          return (
            <div key={tech} className='font-semibold'>
              {tech}
            </div>
          );
        })}
      </div>

      <div className='z-10 flex gap-2 '>
        <Button
          className={'view-code-btn'}
          text={'View Code'}
          icon={<AiFillGithub size={16} />}
          link={project.repoLink}
          target={"_blank"}

        />
        <Button
          className={'live-site-btn'}
          text={'Live Site'}
          icon={<FiExternalLink size={16} />}
          link={project.liveLink}
          target={"_blank"}
        />
      </div>
    </div>
  );
}

export default ProjectItem;
