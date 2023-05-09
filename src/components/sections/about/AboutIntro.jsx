import Status from './Status';
import Accomplishment from './Accomplishment';
import { FaGraduationCap } from 'react-icons/fa';

export default function AboutIntro() {
  return (
    <div className='animate__animated animate__fadeInLeft pt-5 text-sm'>
      <p>
        As a dedicated and passionate student currently pursuing a Bachelor of
        Science in Information Technology (BSIT) at Bulacan State University,
        <b>
          &nbsp;I am highly motivated to excel in the field of front-end
          development.
        </b>
        &nbsp;My desire to constantly expand my knowledge and skills in the
        field, paired with my strong motivation and eagerness for new
        challenges, makes me a strong asset to any team.
      </p>
      <br />
      <p>
        I am also a self-taught UI/UX designer, I&apos;m driven by a passion for
        creating visually stunning and user-friendly interfaces. I&apos;m always
        excited to learn new technologies and take on new challenges to grow and
        develop as a designer and developer.
      </p>
      <br />
      <p>
        I am committed to continuous learning and growth as a developer and am
        eager to join a company that values innovation and creativity.
      </p>
      <br />
      <p className=' my-5 text-lg font-bold uppercase'>
        Status and Accomplishments
      </p>
      <Status
        status={'Graduating Student'}
        icon={<FaGraduationCap size={24} />}
      />
      <p className='my-5 text-xs text-gray-400'>with</p>
      <div className='flex flex-col flex-wrap justify-center gap-2 text-left md:flex-row'>
        <Accomplishment number={4} title={'Completed Personal Project'} />
      </div>
    </div>
  );
}
