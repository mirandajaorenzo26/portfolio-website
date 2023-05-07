import WebTechIcons from './WebTechIcons';
import htmlIcon from '../../../assets/images/HTML.png';
import cssIcon from '../../../assets/images/CSS.png';
import jsIcon from '../../../assets/images/JS.png';
import reactIcon from '../../../assets/images/React.png';
import tailwindIcon from '../../../assets/images/Tailwind.png';
import sassIcon from '../../../assets/images/SASS.png';
export default function TechStack() {
  return (
    <div className='my-5 flex flex-col flex-wrap items-center justify-center gap-2 text-xs font-semibold md:min-w-max md:flex-row md:flex-nowrap lg:justify-start '>
      <p className='whitespace-nowrap md:hidden'>Tech Stack</p>
      <p className='hidden whitespace-nowrap md:block'>
        Tech Stack &nbsp;&nbsp;|{' '}
      </p>
      <div className='flex flex-wrap justify-center gap-2 xl:gap-5'>
        <WebTechIcons icon={htmlIcon} />
        <WebTechIcons icon={cssIcon} />
        <WebTechIcons icon={jsIcon} />
        <WebTechIcons icon={reactIcon} />
        <WebTechIcons icon={tailwindIcon} />
        <WebTechIcons icon={sassIcon} />
      </div>
    </div>
  );
}
