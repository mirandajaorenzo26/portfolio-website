import WebTechIcons from './WebTechIcons';
import htmlIcon from '../../../assets/images/HTML.png';
import cssIcon from '../../../assets/images/CSS.png';
import jsIcon from '../../../assets/images/JS.png';
import reactIcon from '../../../assets/images/React.png';
import tailwindIcon from '../../../assets/images/Tailwind.png';
import sassIcon from '../../../assets/images/SASS.png';
export default function TechStack() {
  return (
    <div className='my-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold xl:justify-start xl:gap-7'>
      <p className='whitespace-nowrap'>Tech Stack | </p>
      <WebTechIcons icon={htmlIcon} />
      <WebTechIcons icon={cssIcon} />
      <WebTechIcons icon={jsIcon} />
      <WebTechIcons icon={reactIcon} />
      <WebTechIcons icon={tailwindIcon} />
      <WebTechIcons icon={sassIcon} />
    </div>
  );
}
