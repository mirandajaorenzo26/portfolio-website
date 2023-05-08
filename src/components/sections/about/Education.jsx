import BulSULogo from './../../../assets/images/schools/bulsu.png';
import YangaLogo from './../../../assets/images/schools/yanga.png';
export default function Education() {
  const education = {
    tertiary: {
      logo: BulSULogo,
      educAttainment: 'Bachelor of Science in Information Technology',
      schoolName: 'Bulacan State University - Main Campus',
      address: 'Malolos, Bulacan',
      awards: [
        {
          title: "Gold Gear Awardee - President's List Award",
          date: 'April 2022',
        },
        {
          title: "Gold Gear Awardee - President's List Award",
          date: 'July 2021',
        },
      ],
    },
    secondary: {
      logo: YangaLogo,
      educAttainment: 'Junior High School - Senior High School',
      schoolName: "Dr.Yanga's Colleges Inc.",
      address: 'Bocaue, Bulacan',
      awards: [
        {
          title: 'Academic Excellence Awardee - With Honors',
          date: 'Mar 2019',
        },
      ],
    },
  };
  return (
    <div
      className='flex flex-col gap-5
    '>
      <div className='animate__animated animate__slideInLeft flex flex-col gap-5 rounded-3xl bg-light-navy-blue p-5 text-center text-white shadow-inner duration-150 hover:scale-150 hover:shadow-lg dark:bg-navy-blue dark:text-semi-white lg:flex-row lg:justify-center lg:text-left'>
        <div className='flex flex-none justify-center p-5'>
          <img src={education.tertiary.logo} className='object-scale-down ' />
        </div>
        <div className='flex flex-col justify-center lg:w-[50%]'>
          <p className='text-xl font-bold'>
            {education.tertiary.educAttainment}
          </p>
          {education.tertiary.schoolName}
          <p className='text-gray-400'>{education.tertiary.address}</p>
          <ul className='my-5  text-slate-400'>
            <p className='font-bold text-white'>Awards</p>
            {education.tertiary.awards.map((award) => {
              return (
                <li
                  className='lg:ml-5 lg:list-disc'
                  key={self.crypto.randomUUID()}>
                  <p className='text-slate-200'>{award.title}</p>
                  <p className='text-sm'>({award.date})</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='animate__animated animate__slideInRight flex flex-col gap-5 rounded-3xl bg-light-navy-blue p-5 text-center text-white shadow-inner duration-150 hover:scale-150 hover:shadow-lg dark:bg-navy-blue dark:text-semi-white lg:flex-row lg:justify-center lg:text-left'>
        <div className='flex  flex-none justify-center p-5'>
          <img src={education.secondary.logo} className='object-scale-down' />
        </div>
        <div className='flex flex-col justify-center lg:w-[50%]'>
          <p className='text-xl font-bold'>
            {education.secondary.educAttainment}
          </p>
          {education.secondary.schoolName}
          <p className='text-gray-400'>{education.secondary.address}</p>
          <ul className='my-5 text-slate-400'>
            <p className='font-bold text-white'>Awards</p>
            {education.secondary.awards.map((award) => {
              return (
                <li
                  className='lg:ml-5 lg:list-disc'
                  key={self.crypto.randomUUID()}>
                  <p className='text-slate-200'>{award.title}</p>
                  <p className='text-sm'>({award.date})</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
