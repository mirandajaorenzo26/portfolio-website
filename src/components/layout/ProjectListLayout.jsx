/* eslint-disable react/prop-types */
import { Carousel } from 'antd';

export default function ProjectList({
  featured,
  otherProjects,
  webDesignProject,
}) {
  return (
    <>
      <div className='overflow-hidden rounded-xl'>
        <Carousel autoplay effect='fade'>
          {featured}
        </Carousel>
      </div>
      <h3 className='my-5 font-bold text-gray-600 dark:text-gray-200'>
        Mini Projects
      </h3>
      <div className='grid gap-5 md:grid-cols-3 '>{otherProjects}</div>
      <h3 className='my-5 font-bold text-gray-600 dark:text-gray-200'>
        Web Design Projects
      </h3>
      <div className='grid gap-5 md:grid-cols-3 '>{webDesignProject}</div>
    </>
  );
}
