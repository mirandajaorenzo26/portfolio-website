import BulSULogo from '../../../assets/images/schools/bulsu.png';
import YangaLogo from '../../../assets/images/schools/yanga.png';
import SchoolItem from './SchoolItem';
export default function Schools() {
  const education = {
    tertiary: {
      logo: BulSULogo,
      educAttainment: 'Bachelor of Science in Information Technology',
      major: 'Web and Mobile Application Development Track',
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
      major: 'TVL Track - Information and Communications Technology Strand',
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
    <div className='flex grid flex-col gap-5'>
      <SchoolItem education={education.tertiary} />
      <SchoolItem education={education.secondary} />
    </div>
  );
}
