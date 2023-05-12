import WebTechIcons from './WebTechIcons';
import htmlIcon from '../../../assets/images/technologies/HTML.png';
import cssIcon from '../../../assets/images/technologies/CSS.png';
import jsIcon from '../../../assets/images/technologies/JS.png';
import reactIcon from '../../../assets/images/technologies/React.png';
import tailwindIcon from '../../../assets/images/technologies/Tailwind.png';
import sassIcon from '../../../assets/images/technologies/SASS.png';
export default function TechStack() {
  return (
    <div className='flex items-center  gap-2 text-xs font-semibold '>
      <p className='whitespace-nowrap'>
        Tech Stack &nbsp;&nbsp;|{' '}
      </p>
      <div className='my-3 flex flex-wrap w-max gap-2'>
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
