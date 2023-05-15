/* eslint-disable react/prop-types */

export default function SchoolItem({ education }) {
  return (
    <div className='animate__animated animate__fadeInUp gap-5  bg-neutral-black p-5 text-center text-neutral-white  dark:bg-light-neutral-black dark:text-dark-neutral-white md:grid-cols-2'>
      <div className='m-5 grid items-center justify-center'>
        <img src={education.logo} className='m-auto' />

        <p>{education.schoolName}</p>
        <p className='text-gray-400'>{education.address}</p>
      </div>
      <div className='col-span-2 flex flex-col justify-center'>
        <p className='text-xl font-bold'>{education.educAttainment}</p>
        <p className='text-lg font-semibold text-gray-400'>{education.major}</p>
        <ul className='my-5 '>
          <p className='font-bold text-neutral-white'>Awards</p>
          {education.awards.map((award) => {
            return (
              <li key={self.crypto.randomUUID()} className='my-2 text-gray-400'>
                <p className=''>{award.title}</p>
                <p className='text-sm'>({award.date})</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
